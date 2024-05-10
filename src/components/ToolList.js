import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import updatedAffiliateLinksData from '../updated_affiliate_links.json'; // Import updated affiliate links

const ToolList = () => {
  // Initialize updatedAffiliateLinks with a default empty array to prevent TypeError if data is undefined
  const updatedAffiliateLinks = Array.isArray(updatedAffiliateLinksData) ? updatedAffiliateLinksData : [];

  // Check if updatedAffiliateLinks is not only an array but also has objects with required properties
  const validData = updatedAffiliateLinks.every(tool => tool.title && tool.affiliateLink);

  // Additional check to ensure updatedAffiliateLinks is not empty
  const hasTools = updatedAffiliateLinks.length > 0;

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        AI Tools Directory
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {validData && hasTools ? (
          updatedAffiliateLinks.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))
        ) : (
          <p>No tools available or data is invalid.</p>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ToolList;
