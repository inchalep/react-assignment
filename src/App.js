import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navBar';
import Home from './pages/home';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar/>
      <Home/>
    </Box>
  );
}

export default App;
