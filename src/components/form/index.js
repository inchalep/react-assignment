import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { formFlagSet, setLoginStatus } from '../../redux/slices/login';
import { registerUser } from '../../redux/slices/registeredUsers';
const LoginRegistration = () => {
  const [errs, setErrs] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    cPassword: '',
  });
  const { formFlag } = useSelector(state => state.loginFlag);
  const { allUsers } = useSelector(state => state.registerUsers);
  const dispatch = useDispatch();

  const setLogin = flag => {
    setErrs({});
    dispatch(formFlagSet(flag));
  };

  const fieldValidation = () => {
    const errors = {};
    const { username, password, email, cPassword } = formData;
    if (!username) {
      errors.username = 'Please enter username.';
    }
    if (!password) {
      errors.password = 'Please enter password.';
    }
    if (!email && formFlag !== 'login') {
      errors.email = 'Please enter email.';
    }
    if ((!cPassword || password !== cPassword) && formFlag !== 'login') {
      errors.cPassword = 'Password should be match.';
    }
    return errors;
  };

  const inputHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setFormData({
      username: '',
      password: '',
      email: '',
      cPassword: '',
    });
  };
  const formHandler = e => {
    e.preventDefault();
    setErrs(fieldValidation());
    const notValid = fieldValidation();
    const { username, email, password } = formData;
    if (Object.values(notValid).length <= 0) {
      reset();
      if (formFlag !== 'login') {
        const user = allUsers.find(
          user => user.email === email && user.username === username
        );
        console.log(user, 'useruser');
        if (user) {
          setErrs({
            ...errs,
            loginFailed: 'User already exist.',
          });
        } else {
          dispatch(registerUser({ username, email, password }));
          dispatch(setLoginStatus());
          setErrs({});
        }
      } else {
        const user = allUsers.find(
          user => user.username === username && user.password === password
        );
        if (user) {
          dispatch(setLoginStatus());
          setErrs({});
        } else {
          setErrs({});
          setErrs({
            loginFailed: 'Username & Password is not valid.',
          });
        }
      }
    }
  };
  return (
    <Box w="320px">
      <form onSubmit={formHandler}>
        {formFlag !== 'login' && (
          <FormControl isInvalid={errs.email}>
            <FormLabel>Email:</FormLabel>
            <Input
              name="email"
              value={formData.email}
              type="email"
              onChange={inputHandler}
            />
            <FormErrorMessage>{errs.email}</FormErrorMessage>
          </FormControl>
        )}
        <FormControl isInvalid={errs.username}>
          <FormLabel>Username:</FormLabel>
          <Input
            name="username"
            value={formData.username}
            type="text"
            onChange={inputHandler}
          />
          <FormErrorMessage>{errs.username}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errs.password}>
          <FormLabel>Password:</FormLabel>
          <Input
            name="password"
            value={formData.password}
            type="password"
            onChange={inputHandler}
          />
          <FormErrorMessage>{errs.password}</FormErrorMessage>
        </FormControl>
        {formFlag !== 'login' && (
          <FormControl isInvalid={errs.cPassword}>
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              name="cPassword"
              value={formData.cPassword}
              type="password"
              onChange={inputHandler}
            />
            <FormErrorMessage>{errs.cPassword}</FormErrorMessage>
          </FormControl>
        )}
        <Button w="full" mt="20px" type="submit" colorScheme="teal">
          {formFlag}
        </Button>
      </form>
      {errs.loginFailed && (
        <Text textColor="red.500" fontSize="14px" textAlign="left">
          {errs.loginFailed}
        </Text>
      )}
      {formFlag === 'login' ? (
        <Text
          onClick={() => setLogin('register')}
          pt="10px"
          cursor="pointer"
          textAlign="right"
          fontSize="14px"
          textDecor="underline"
        >
          Don't have an account ?
        </Text>
      ) : (
        <Text
          onClick={() => setLogin('login')}
          pt="10px"
          cursor="pointer"
          textAlign="right"
          fontSize="14px"
          textDecor="underline"
        >
          Already have an account?
        </Text>
      )}
    </Box>
  );
};

export default LoginRegistration;
