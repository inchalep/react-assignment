import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navBar';
import Home from './pages/home';
import LoginRegistration from './pages/loginRegistration/index.js';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { isLogin } = useSelector(state => state.loginFlag);
  return (
    <Box textAlign="center" fontSize="xl">
      {isLogin && <Navbar />}
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/login" element={<LoginRegistration />} />
        )}
        <Route path="*" element={isLogin ? <Home /> : <LoginRegistration />} />
      </Routes>
    </Box>
  );
}

export default App;
