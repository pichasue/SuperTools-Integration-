import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import updatedAffiliateLinks from '../updated_affiliate_links.json'; // Import updated affiliate links

const ToolList = () => {
  // Console log to check if updatedAffiliateLinks is defined
  console.log('updatedAffiliateLinks data:', updatedAffiliateLinks);

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        AI Tools Directory
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {updatedAffiliateLinks && updatedAffiliateLinks.length > 0 ? (
          updatedAffiliateLinks.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))
        ) : (
          <p>No tools available.</p>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ToolList;
