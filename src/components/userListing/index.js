import {
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { FaEdit, FaSortAlphaDownAlt, FaTrash } from 'react-icons/fa';
import { useTable, useSortBy, usePagination } from 'react-table';

const UserListing = ({ users, setActiveUser, onOpen }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'NAME',
        accessor: 'firstName',
      },
      {
        Header: 'GENDER',
        accessor: 'gender',
      },
      {
        Header: 'LAST LOGIN',
        accessor: 'email',
      },
    ],
    []
  );

  const data = React.useMemo(() => users, [users]) || [];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );
  return (
    <TableContainer>
      <Flex pb="10px" alignItems="center" justifyContent="flex-end">
        <Button
          m="0 10px"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </Button>{' '}
        <Button m="0 10px" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>{' '}
        <Text>
          Page {pageIndex + 1} of {pageOptions.length} | Go to page:{' '}
          <Input
            p="5px"
            textAlign="center"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            w="50px"
          />
        </Text>{' '}
        <Select
          w="110px"
          ml="10px"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
      <Table variant="simple" {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    fontWeight="bold"
                    color="black"
                  >
                    {column.render('Header')}{' '}
                    <span>
                      <Icon as={FaSortAlphaDownAlt} />
                    </span>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr
                onClick={() => {
                  setActiveUser(row.original.id);
                  onOpen();
                }}
                {...row.getRowProps()}
                cursor="pointer"
                bg={
                  Object.values(row.values).includes('closed')
                    ? 'closedTr'
                    : Object.values(row.values).includes('delivered')
                    ? 'trBg'
                    : 'white'
                }
              >
                {row.cells.map(cell => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      fontWeight={
                        cell.column.Header === 'Id' ||
                        cell.column.Header === 'Type' ||
                        Object.values(row.values).includes('closed')
                          ? '600'
                          : '400'
                      }
                    >
                      <Text as="span">{cell.render('Cell')}</Text>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>{' '}
      </Table>
    </TableContainer>
  );
};

export default UserListing;
