import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';

const ToolList = ({ tools }) => {
  // Group tools by category
  const groupedTools = tools.reduce((group, tool) => {
    const { category } = tool;
    group[category] = group[category] ?? [];
    group[category].push(tool);
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
                // Placeholder for affiliate link, to be replaced with actual link
                affiliateLink="https://placeholder-affiliate-link.com"
              />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ToolList;
