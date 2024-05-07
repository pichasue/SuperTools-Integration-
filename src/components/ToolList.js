import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';

// Define a JSON object representing the AI tools across various categories
const aiTools = {
  "Media and Communication": [
    {
      "title": "Hootsuite",
      "description": "A social media management tool powered by AI for posting messages and short-form videos on multiple platforms.",
      "tags": ["Social Media", "AI", "Management"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "ChatGPT",
      "description": "A tool used for bi-directional text messages with patients for appointment reminders, follow-up conversations, and more.",
      "tags": ["Chatbot", "AI", "Communication"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    }
  ],
  "Banking": [
    {
      "title": "Insights2Impact",
      "description": "A live stream event covering the adoption of Intelligent Virtual Assistants and Robo-Advisors in banking.",
      "tags": ["Banking", "AI", "Virtual Assistant"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Cognitive Applications",
      "description": "Applications that learn at scale, reason with purpose, and interact with humans naturally in the banking sector.",
      "tags": ["Banking", "AI", "Cognitive Computing"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    }
  ],
  "Health": [
    {
      "title": "AI Medical Diagnosis",
      "description": "Tools used for ambient scribing, predicting no-show patterns, and augmenting decisions for medical diagnoses.",
      "tags": ["Healthcare", "AI", "Diagnosis"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "AI Patient Outreach",
      "description": "Tools for creating personalized messages for different service needs based on patient data.",
      "tags": ["Healthcare", "AI", "Patient Engagement"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    }
  ],
  "Agriculture": [
    {
      "title": "AI Crop Management",
      "description": "Software used for soil health management, risk assessment, and control of crop chemical impact.",
      "tags": ["Agriculture", "AI", "Crop Management"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "AI Livestock Management",
      "description": "Software for livestock behavior monitoring and health tracking.",
      "tags": ["Agriculture", "AI", "Livestock Management"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    }
  ],
  "Social Development": [
    {
      "title": "AI Social Media Management",
      "description": "Tools for posting messages and short-form videos on multiple platforms for social development.",
      "tags": ["Social Development", "AI", "Social Media"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "AI Chatbots",
      "description": "Chatbots used for bi-directional text messages with patients for various communication needs.",
      "tags": ["Social Development", "AI", "Chatbot"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    }
  ]
};

const ToolList = ({ tools = aiTools }) => {
  // Group tools by category
  const groupedTools = Object.entries(tools).reduce((group, [category, tools]) => {
    group[category] = group[category] ?? [];
    group[category].push(...tools);
    return group;
  }, {});

  return (
    <Box>
      {Object.entries(groupedTools).map(([category, tools]) => (
        <Box key={category} mb={10}>
          <Heading as="h3" size="lg" mb={4}>{category}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
                affiliateLink={tool.affiliateLink}
              />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ToolList;
