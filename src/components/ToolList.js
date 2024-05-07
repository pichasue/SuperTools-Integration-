import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ToolCard from './ToolCard';

const ToolList = ({ tools }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      {tools.map((tool, index) => (
        <ToolCard
          key={index}
          title={tool.title}
          description={tool.description}
          tags={tool.tags}
        />
      ))}
    </SimpleGrid>
  );
};

export default ToolList;
