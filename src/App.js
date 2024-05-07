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
    // Additional tools for Media and Communication
    {
      title: 'Content Creation AI',
      description: 'Automates content creation for various media platforms.',
      tags: ['Content', 'Creation', 'AI'],
      category: 'Media and Communication'
    },
    {
      title: 'Social Media Manager AI',
      description: 'Manages and analyzes social media interactions.',
      tags: ['Social Media', 'Management', 'AI'],
      category: 'Media and Communication'
    },
    // Additional tools for Banking
    {
      title: 'Fraud Detection AI',
      description: 'Uses machine learning to detect and prevent fraud in banking transactions.',
      tags: ['Fraud', 'Detection', 'Banking', 'AI'],
      category: 'Banking'
    },
    {
      title: 'Investment Advisor AI',
      description: 'Provides AI-powered investment advice and portfolio management.',
      tags: ['Investment', 'Advisor', 'AI'],
      category: 'Banking'
    },
    // Additional tools for Health
    {
      title: 'Diagnostic AI',
      description: 'Assists doctors in diagnosing diseases using AI.',
      tags: ['Diagnostic', 'Healthcare', 'AI'],
      category: 'Health'
    },
    {
      title: 'Personal Health Coach AI',
      description: 'Offers personalized health coaching and fitness tracking.',
      tags: ['Health', 'Coaching', 'AI'],
      category: 'Health'
    },
    // Additional tools for Agriculture
    {
      title: 'Crop Monitoring AI',
      description: 'Monitors crop health and provides insights for better yield.',
      tags: ['Crops', 'Monitoring', 'AI'],
      category: 'Agriculture'
    },
    {
      title: 'Weather Prediction AI',
      description: 'Predicts weather patterns to aid in agricultural planning.',
      tags: ['Weather', 'Prediction', 'Agriculture', 'AI'],
      category: 'Agriculture'
    },
    // Additional tools for Social Developments
    {
      title: 'Education Enhancement AI',
      description: 'Enhances learning experiences through personalized AI.',
      tags: ['Education', 'Learning', 'AI'],
      category: 'Social Developments'
    },
    {
      title: 'Community Engagement AI',
      description: 'Facilitates community engagement and feedback using AI.',
      tags: ['Community', 'Engagement', 'AI'],
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
