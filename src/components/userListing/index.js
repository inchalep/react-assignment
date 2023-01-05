import {
  Box,
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
import { FaSearch, FaSortAlphaDownAlt } from 'react-icons/fa';
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table';

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

  const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <Flex
        w="350px"
        shadow="sm"
        border="1px"
        borderColor="blackAlpha.100"
        p="2px 15px"
        mb="20px"
        rounded="full"
      >
        <Flex alignItems="center">
          <Box color="blackAlpha.400">
            <FaSearch />
          </Box>
          <Input
            p="5px 10px"
            value={value || ''}
            onChange={e => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder={`${count} records...`}
            style={{
              fontSize: '1.1rem',
              border: '0',
            }}
            _focus={{ border: 'none', outline: 'none' }}
          />
        </Flex>
      </Flex>
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <TableContainer>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table variant="simple" {...getTableProps()} className="listing-table">
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr
              shadow="md"
              bg="gray.200"
              rounded="md"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map(column => {
                return (
                  <Th
                    w="300px"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    fontWeight="bold"
                    color="black"
                    textAlign="left"
                    p="15px 8px"
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
                borderLeft="4px"
                borderColor={
                  row.original.bloodGroup === 'O+'
                    ? 'green'
                    : row.original.bloodGroup === 'B+'
                    ? 'orange'
                    : 'red'
                }
                cursor="pointer"
                rounded="md"
                shadow="sm"
                _hover={{
                  shadow: 'md',
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      fontSize="16px"
                      p="20px 10px !important"
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
      <Flex p="20px" alignItems="center" justifyContent="space-between">
        <Text fontSize="14px" color="blackAlpha.600">
          Showing {pageIndex + 1} of {pageOptions.length}
        </Text>{' '}
        <Flex>
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
          <Select
            w="110px"
            ml="10px"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 15, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </TableContainer>
  );
};

export default UserListing;
