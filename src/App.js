import React from 'react';
import NavBar from './NavBar';
import ToolList from './components/ToolList';
import Footer from './components/Footer';
import SubscriptionForm from './components/SubscriptionForm'; // Importing the SubscriptionForm component
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'; // Importing the custom theme

function App() {
  // Categorized list of AI tools
  const tools = {
    'Media and Communication': [
      {
        title: 'AI Tool for Media',
        description: 'An AI tool designed for enhancing media production.',
        tags: ['Media', 'AI', 'Production'],
        affiliateLink: '#'
      },
      // ... additional tools and categories
    ]
    // ... more categories and tools can be added here
  };

  return (
    <ChakraProvider theme={theme}> {/* Passing the custom theme to ChakraProvider */}
      <NavBar />
      <SubscriptionForm /> {/* Adding the SubscriptionForm component */}
      <ToolList tools={tools} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
