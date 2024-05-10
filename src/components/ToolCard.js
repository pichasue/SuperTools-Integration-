import React from 'react';
import { Box, Text, Tag, VStack, HStack, Link, Image } from '@chakra-ui/react';

const ToolCard = ({ title, description, tags, affiliateLink, logo }) => {
  // Ensure tags is always an array to prevent 'map' function TypeError
  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      maxWidth="sm"
      margin="2"
      bg="white" // Changed background color to white for better contrast
      borderColor="gray.200" // Lighter border color for a subtle effect
    >
      <VStack align="stretch">
        {logo && (
          <Image
            src={logo}
            alt={`${title} logo`}
            objectFit="contain"
            htmlWidth="100%"
            htmlHeight="auto"
            borderRadius="md"
          />
        )}
        <Link href={affiliateLink} isExternal>
          <Text fontSize="xl" fontWeight="semibold" color="gray.800"> {/* Darker text color for the title */}
            {title}
          </Text>
        </Link>
        <Text mt={4} color="gray.600"> {/* Darker text color for the description */}
          {description}
        </Text>
        <HStack spacing={4} mt={4}>
          {safeTags.map((tag, index) => (
            <Tag size="md" variant="solid" colorScheme="teal" key={index} borderRadius="full"> {/* Rounded tags to match the brand's soft aesthetic */}
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ToolCard;
