import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const UserDetails = ({ data }) => {
  console.log(data);
  return (
    <Box p="30px 10px">
      <Heading fontSize="22px" color="blackAlpha.500" mb="20px">
        User Details
      </Heading>
      <Flex>
        <Box border="1px" borderColor="blackAlpha.300" mr="8px" rounded="full">
          <Avatar src={data?.image} />
        </Box>
        <Box>
          <Text fontWeight="600">{`${data?.firstName} ${data?.lastName}`}</Text>
          <Text color="blackAlpha.600">Username: {data?.username}</Text>
        </Box>
      </Flex>
      <Box>
        <Heading m="15px 0 5px" fontSize="18px">
          Basic and account Details:
        </Heading>
        <Text fontWeight="600">
          Card Number:{' '}
          <Text as="span" fontWeight="400">
            {data?.bank.cardNumber}
          </Text>
        </Text>
        <Text fontWeight="600">
          Card Type:{' '}
          <Text as="span" fontWeight="400">
            {data?.bank.cardType}
          </Text>
        </Text>
        <Text fontWeight="600">
          Currency:{' '}
          <Text as="span" fontWeight="400">
            {data?.bank.currency}
          </Text>
        </Text>
        <Text fontWeight="600">
          Expiry:{' '}
          <Text as="span" fontWeight="400">
            {data?.bank.cardExpire}
          </Text>
        </Text>
        <Text fontWeight="600">
          Iban:{' '}
          <Text as="span" fontWeight="400">
            {data?.bank.iban}
          </Text>
        </Text>
      </Box>
      <Box>
        <Heading m="15px 0 5px" fontSize="18px">
          Company Details:
        </Heading>
        <Text fontWeight="600">
          Name:{' '}
          <Text as="span" fontWeight="400">
            {data?.company.name}
          </Text>
        </Text>
        <Text fontWeight="600">
          Title:{' '}
          <Text as="span" fontWeight="400">
            {data?.company.title}
          </Text>
        </Text>
        <Text fontWeight="600">
          Department:{' '}
          <Text as="span" fontWeight="400">
            {data?.company.department}
          </Text>
        </Text>
        <Text fontWeight="600">
          Address:{' '}
          <Text fontWeight="400">{`${data?.address.address} ${data?.address.city}, ${data?.address.state}-${data?.address.postalCode}`}</Text>
        </Text>
      </Box>
      <Box>
        <Heading m="15px 0 5px" fontSize="18px">
          Other Details:
        </Heading>
        <Text fontWeight="600">
          Date of birth:{' '}
          <Text as="span" fontWeight="400">
            {data?.birthDate}
          </Text>
        </Text>
        <Text fontWeight="600">
          Age:{' '}
          <Text as="span" fontWeight="400">
            {data?.age}
          </Text>
        </Text>
        <Text fontWeight="600">
          EyeColor:{' '}
          <Text as="span" fontWeight="400">
            {data?.eyeColor}
          </Text>
        </Text>
        <Text fontWeight="600">
          Gender:
          <Text as="span" fontWeight="400">
            {data?.gender}
          </Text>
        </Text>
        <Text fontWeight="600">
          MaidenName:
          <Text as="span" fontWeight="400">
            {data?.maidenName}
          </Text>
        </Text>
        <Text fontWeight="600">
          Weight:
          <Text as="span" fontWeight="400">
            {data?.weight}
          </Text>
        </Text>
        <Text fontWeight="600">
          Height:
          <Text as="span" fontWeight="400">
            {data?.height}
          </Text>
        </Text>
        <Text fontWeight="600">
          BloodGroup:
          <Text as="span" fontWeight="400">
            {data?.bloodGroup}
          </Text>
        </Text>
        <Text fontWeight="600">
          University:
          <Text as="span" fontWeight="400">
            {data?.university}
          </Text>
        </Text>
        <Text fontWeight="600">
          UserAgent:
          <Text as="span" fontWeight="400">
            {data?.userAgent}
          </Text>
        </Text>
        <Text fontWeight="600">
          Username:
          <Text as="span" fontWeight="400">
            {data?.username}
          </Text>
        </Text>
        <Text fontWeight="600">
          Ein:
          <Text as="span" fontWeight="400">
            {data?.ein}
          </Text>
        </Text>
        <Text fontWeight="600">
          Domain:
          <Text as="span" fontWeight="400">
            {data?.domain}
          </Text>
        </Text>
        <Text fontWeight="600">
          MacAddress:
          <Text as="span" fontWeight="400">
            {data?.macAddress}
          </Text>
        </Text>
        <Text fontWeight="600">
          Phone:
          <Text as="span" fontWeight="400">
            {data?.phone}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default UserDetails;
