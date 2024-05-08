import React from 'react';
import NavBar from './NavBar';
import ToolList from './components/ToolList';
import Footer from './components/Footer';
import SubscriptionForm from './components/SubscriptionForm'; // Importing the SubscriptionForm component
import { ChakraProvider } from '@chakra-ui/react';

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
      {
        title: 'Content Creation AI',
        description: 'Automates content creation for various media platforms.',
        tags: ['Content', 'Creation', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Social Media Manager AI',
        description: 'Manages and analyzes social media interactions.',
        tags: ['Social Media', 'Management', 'AI'],
        affiliateLink: '#'
      }
      // ... additional tools for Media and Communication
    ],
    'Banking': [
      {
        title: 'AI Tool for Banking',
        description: 'AI-driven analytics tool for banking insights.',
        tags: ['Banking', 'Analytics', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Fraud Detection AI',
        description: 'Uses machine learning to detect and prevent fraud in banking transactions.',
        tags: ['Fraud', 'Detection', 'Banking', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Investment Advisor AI',
        description: 'Provides AI-powered investment advice and portfolio management.',
        tags: ['Investment', 'Advisor', 'AI'],
        affiliateLink: '#'
      }
      // ... additional tools for Banking
    ],
    'Health': [
      {
        title: 'AI Health Assistant',
        description: 'Virtual health assistant powered by AI.',
        tags: ['Health', 'Assistant', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Diagnostic AI',
        description: 'Assists doctors in diagnosing diseases using AI.',
        tags: ['Diagnostic', 'Healthcare', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Personal Health Coach AI',
        description: 'Offers personalized health coaching and fitness tracking.',
        tags: ['Health', 'Coaching', 'AI'],
        affiliateLink: '#'
      }
      // ... additional tools for Health
    ],
    'Agriculture': [
      {
        title: 'AI for Agriculture',
        description: 'Agricultural predictions using AI algorithms.',
        tags: ['Agriculture', 'Predictions', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Crop Monitoring AI',
        description: 'Monitors crop health and provides insights for better yield.',
        tags: ['Crops', 'Monitoring', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Weather Prediction AI',
        description: 'Predicts weather patterns to aid in agricultural planning.',
        tags: ['Weather', 'Prediction', 'Agriculture', 'AI'],
        affiliateLink: '#'
      }
      // ... additional tools for Agriculture
    ],
    'Social Developments': [
      {
        title: 'Social Development AI',
        description: 'AI to aid in various social development projects.',
        tags: ['Social Development', 'Projects', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Education Enhancement AI',
        description: 'Enhances learning experiences through personalized AI.',
        tags: ['Education', 'Learning', 'AI'],
        affiliateLink: '#'
      },
      {
        title: 'Community Engagement AI',
        description: 'Facilitates community engagement and feedback using AI.',
        tags: ['Community', 'Engagement', 'AI'],
        affiliateLink: '#'
      }
      // ... additional tools for Social Developments
    ]
    // ... more categories and tools can be added here
  };

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
