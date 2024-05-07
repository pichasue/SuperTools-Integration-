import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Link href='/'>Home</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/terms-conditions'>Terms & Conditions</Link>
        </Stack>
        <Text>© 2024 The Rundown AI, Inc. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href='https://twitter.com/TheRundownAI'>Twitter</Link>
          <Link href='https://www.linkedin.com/company/the-rundown-ai/'>LinkedIn</Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
