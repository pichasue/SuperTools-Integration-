import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import updatedAffiliateLinksData from '../updated_affiliate_links.json'; // Import updated affiliate links

const ToolList = ({ category }) => {
  // Initialize updatedAffiliateLinks with a default empty array to prevent TypeError if data is undefined
  const updatedAffiliateLinks = Array.isArray(updatedAffiliateLinksData) ? updatedAffiliateLinksData : [];

  // Filter tools by category if provided, otherwise use all tools
  const filteredTools = category ? updatedAffiliateLinks.filter(tool => tool.category === category) : updatedAffiliateLinks;

  // Check if filteredTools is not only an array but also has objects with required properties
  const validData = filteredTools.every(tool => tool.title && tool.affiliateLink && tool.description && tool.logo);

  // Additional check to ensure filteredTools is not empty
  const hasTools = filteredTools.length > 0;

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        {category ? `${category} Tools Directory` : 'AI Tools Directory'}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {validData && hasTools ? (
          filteredTools.map((tool, index) => (
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
