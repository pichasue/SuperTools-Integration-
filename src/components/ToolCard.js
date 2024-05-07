import React from 'react';
import { Box, Text, Tag, VStack, HStack } from '@chakra-ui/react';

const ToolCard = ({ title, description, tags }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      maxWidth="sm"
      margin="2"
    >
      <VStack align="stretch">
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Text mt={4}>{description}</Text>
        <HStack spacing={4} mt={4}>
          {tags.map((tag, index) => (
            <Tag size="md" variant="solid" colorScheme="teal" key={index}>
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ToolCard;
