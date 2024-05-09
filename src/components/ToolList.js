import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import updatedAffiliateLinks from '../updated_affiliate_links.json'; // Import updated affiliate links

const ToolList = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        AI Tools Directory
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {updatedAffiliateLinks.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ToolList;
