import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import categorizedTools from '../../categorized_tools.json';

const ToolList = ({ tools = categorizedTools }) => {
  // Log the initial structure and type of the tools prop
  console.log("Tools prop (initial):", tools, "Type:", typeof tools);

  // Group tools by category
  const groupedTools = Object.keys(tools).reduce((group, category) => {
    const toolsInCategory = tools[category];
    console.log(`Category: ${category}`, `Tools in category (before reduce):`, toolsInCategory, "Type:", Array.isArray(toolsInCategory) ? "Array" : typeof toolsInCategory);

    // Ensure the category array is initialized and then directly assign the tools to the category
    group[category] = Array.isArray(toolsInCategory) ? toolsInCategory : [toolsInCategory];

    return group;
  }, {});

  // Log the final grouped tools structure
  console.log("Grouped tools (after reduce):", groupedTools);

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        AI Tools Directory
      </Heading>
      {Object.entries(groupedTools).map(([category, tools]) => (
        <Box key={category} mb={10}>
          <Heading as="h3" size="lg" mb={4}>
            {category}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ToolList;
