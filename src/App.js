import React from 'react';
import NavBar from './NavBar';
import ToolList from './components/ToolList';
import Footer from './components/Footer';
import SubscriptionForm from './components/SubscriptionForm'; // Importing the SubscriptionForm component
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // Categorized list of AI tools
  const tools = [
    {
      title: 'AI Tool for Media',
      description: 'An AI tool designed for enhancing media production.',
      tags: ['Media', 'AI', 'Production'],
      category: 'Media and Communication'
    },
    {
      title: 'AI Tool for Banking',
      description: 'AI-driven analytics tool for banking insights.',
      tags: ['Banking', 'Analytics', 'AI'],
      category: 'Banking'
    },
    {
      title: 'AI Health Assistant',
      description: 'Virtual health assistant powered by AI.',
      tags: ['Health', 'Assistant', 'AI'],
      category: 'Health'
    },
    {
      title: 'AI for Agriculture',
      description: 'Agricultural predictions using AI algorithms.',
      tags: ['Agriculture', 'Predictions', 'AI'],
      category: 'Agriculture'
    },
    {
      title: 'Social Development AI',
      description: 'AI to aid in various social development projects.',
      tags: ['Social Development', 'Projects', 'AI'],
      category: 'Social Developments'
    },
    // ... more tools can be added here
  ];

  return (
    <ChakraProvider>
      <NavBar />
      <SubscriptionForm /> {/* Adding the SubscriptionForm component */}
      <ToolList tools={tools} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
