import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';

// Define a JSON object representing the AI tools across various categories
const aiTools = {
  "Media and Communication": [
    {
      "title": "Buffer",
      "description": "A platform for scheduling, publishing, and analyzing social media posts.",
      "tags": ["Social Media", "Scheduling", "Analytics"],
      "affiliateLink": "https://buffer.com"
    },
    {
      "title": "Grammarly",
      "description": "An AI-powered writing assistant that helps you write clear, mistake-free content.",
      "tags": ["Writing", "Content", "AI"],
      "affiliateLink": "https://grammarly.com"
    }
  ],
  "Banking": [
    {
      "title": "Kasisto",
      "description": "AI for finance that enables meaningful customer engagement through intelligent conversations.",
      "tags": ["Finance", "AI", "Conversational"],
      "affiliateLink": "https://kasisto.com"
    },
    {
      "title": "Zest AI",
      "description": "Lending software that uses AI to better assess borrower risk and improve loan performance.",
      "tags": ["Lending", "Risk Assessment", "AI"],
      "affiliateLink": "https://zest.ai"
    }
  ],
  "Health": [
    {
      "title": "PathAI",
      "description": "AI-powered technology for pathology to assist in accurate diagnosis.",
      "tags": ["Pathology", "Diagnosis", "AI"],
      "affiliateLink": "https://pathai.com"
    },
    {
      "title": "Babylon Health",
      "description": "Digital healthcare assistant powered by AI, offering medical consultations.",
      "tags": ["Healthcare", "Consultation", "AI"],
      "affiliateLink": "https://babylonhealth.com"
    }
  ],
  "Agriculture": [
    {
      "title": "FarmBot",
      "description": "Open-source CNC farming machine and software for automated precision agriculture.",
      "tags": ["Farming", "Automation", "Open-source"],
      "affiliateLink": "https://farm.bot"
    },
    {
      "title": "CropX",
      "description": "An ag-analytics company that develops cloud-based software solutions integrated with wireless sensors, which increase crop yields.",
      "tags": ["Analytics", "Sensors", "Yield Increase"],
      "affiliateLink": "https://cropx.com"
    }
  ],
  "Social Development": [
    {
      "title": "Ushahidi",
      "description": "A platform that allows users to crowdsource crisis information via text messaging and social media.",
      "tags": ["Crisis Response", "Crowdsourcing", "Platform"],
      "affiliateLink": "https://ushahidi.com"
    },
    {
      "title": "DataKind",
      "description": "Harnesses the power of data science in the service of humanity.",
      "tags": ["Data Science", "Humanity", "Service"],
      "affiliateLink": "https://datakind.org"
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
