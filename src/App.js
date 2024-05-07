import React from 'react';
import NavBar from './NavBar';
import ToolList from './components/ToolList';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // Dummy data for ToolList component
  const tools = [
    {
      title: 'Tool 1',
      description: 'This is a description for Tool 1.',
      tags: ['Tag1', 'Tag2']
    },
    {
      title: 'Tool 2',
      description: 'This is a description for Tool 2.',
      tags: ['Tag1', 'Tag2']
    },
    // ... more tools
  ];

  return (
    <ChakraProvider>
      <NavBar />
      <ToolList tools={tools} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
