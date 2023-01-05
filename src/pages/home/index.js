import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserDetails from '../../components/userDetails';
import UserListing from '../../components/userListing';
import { fetchUsers } from '../../redux/slices/users';

const Home = () => {
  const [activeUser, setActiveUser] = useState('');
  const [activeUserData, setActiveUserData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    getUserData();
  }, [activeUser]);

  const getUserData = () => {
    if (users && activeUser) {
      const user = users.find(user => user.id === activeUser);
      setActiveUserData(user);
    }
  };
  return (
    <Box className="wrapper" p="45px 0">
      <Box w="full" p="10px 0 15px" textAlign="left">
        <Heading
          color={colorMode === 'dark' ? 'white' : 'blackAlpha.400'}
          fontSize="24px"
          fontWeight="500"
        >
          Users
        </Heading>
        <Text
          p="5px 0"
          fontSize="16px"
          color={colorMode === 'dark' ? 'white' : 'blackAlpha.400'}
        >
          Here are all the users for this project
        </Text>
      </Box>
      <UserListing
        users={users}
        setActiveUser={setActiveUser}
        onOpen={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent roundedTopLeft="3xl" w="800px !important">
          <DrawerCloseButton />
          <DrawerBody>
            <UserDetails data={activeUserData} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Home;
