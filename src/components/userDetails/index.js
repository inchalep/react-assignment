import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const UserDetails = ({ data }) => {
  console.log(data);
  return (
    <Box p='30px 10px'>
      <Heading fontSize='22px' color='blackAlpha.500' mb='20px'>User Details</Heading>
      <Flex>
        <Box border='1px' borderColor='blackAlpha.300'>
          <Avatar src={data?.image} />
        </Box>
        <Box>
          <Text>{`${data?.firstName} ${data?.lastName}`}</Text>
          <Text>Username: {data?.username}</Text>
        </Box>
      </Flex>
      <Box>
        <Heading m='15px 0 5px' fontSize='18px'>Basic and account Details</Heading>
        <Text>
          Card Number: <Text as="span">{data?.bank.cardNumber}</Text>
        </Text>
        <Text>
          Card Type: <Text as="span">{data?.bank.cardType}</Text>
        </Text>
        <Text>
          Currency: <Text as="span">{data?.bank.currency}</Text>
        </Text>
        <Text>
          Expiry: <Text as="span">{data?.bank.cardExpire}</Text>
        </Text>
        <Text>
          Iban: <Text as="span">{data?.bank.iban}</Text>
        </Text>
      </Box>
      <Box>
        <Heading m='15px 0 5px' fontSize='18px'>Company Details</Heading>
        <Text>
          Name: <Text as="span">{data?.company.name}</Text>
        </Text>
        <Text>
          Title: <Text as="span">{data?.company.title}</Text>
        </Text>
        <Text>
          Department: <Text as="span">{data?.company.department}</Text>
        </Text>
        <Text>
          Address:{' '}
          <Text>{`${data?.address.address} ${data?.address.city}, ${data?.address.state}-${data?.address.postalCode}`}</Text>
        </Text>
      </Box>
      <Box>
        <Heading m='15px 0 5px' fontSize='18px'>Other Details:</Heading>
        <Text>
          Date of birth: <Text as="span">{data?.birthDate}</Text>
        </Text>
        <Text>
          Age: <Text as="span">{data?.age}</Text>
        </Text>
        <Text>
          EyeColor: <Text as="span">{data?.eyeColor}</Text>
        </Text>
        <Text>
          Gender<Text as="span">{data?.gender}</Text>
        </Text>
        <Text>
          MaidenName<Text as="span">{data?.maidenName}</Text>
        </Text>
        <Text>
          Weight<Text as="span">{data?.weight}</Text>
        </Text>
        <Text>
          Height<Text as="span">{data?.height}</Text>
        </Text>
        <Text>
          BloodGroup<Text as="span">{data?.bloodGroup}</Text>
        </Text>
        <Text>
          University<Text as="span">{data?.university}</Text>
        </Text>
        <Text>
          UserAgent<Text as="span">{data?.userAgent}</Text>
        </Text>
        <Text>
          Username<Text as="span">{data?.username}</Text>
        </Text>
        <Text>
          Ein<Text as="span">{data?.ein}</Text>
        </Text>
        <Text>
          Domain
          <Text as="span">{data?.domain}</Text>
        </Text>
        <Text>
          MacAddress
          <Text as="span">{data?.macAddress}</Text>
        </Text>
        <Text>
          Phone
          <Text as="span">{data?.phone}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default UserDetails;
