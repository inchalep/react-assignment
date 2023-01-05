import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import LoginRegisterForm from '../../components/form';

const LoginRegistration = () => {
  return (
    <Flex>
      <Image
        src={process.env.PUBLIC_URL + './images/bg.png'}
        h="100vh"
        w="50%"
      />
      <Flex justifyContent="center" alignItems="center" w="50%">
        <LoginRegisterForm />
      </Flex>
    </Flex>
  );
};

export default LoginRegistration;
