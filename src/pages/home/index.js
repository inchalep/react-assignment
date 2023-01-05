import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
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
    <Box className="wrapper">
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <UserDetails data={activeUserData}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Home;
