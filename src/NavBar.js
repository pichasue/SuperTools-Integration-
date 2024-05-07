import React, { useState } from 'react';
import { Box, Flex, Text, Button, IconButton, Stack, Link } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [display, setDisplay] = useState('none');
  // Updated color scheme to match the logo and the original site's dark theme
  const bgColor = 'gray.900'; // Dark background color
  const textColor = 'white'; // White text color for contrast
  const primaryColor = '#319795'; // Teal color from the logo
  const accentColor = '#DAA520'; // Gold color for accents

  const handleToggle = () => {
    setDisplay(display === 'none' ? 'flex' : 'none');
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColor}
      color={textColor}
    >
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold" color={primaryColor}>
          SuperTools
        </Text>
      </Flex>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={handleToggle}
        icon={display === 'none' ? <FaBars /> : <FaTimes />}
        variant="outline"
        aria-label="Open Menu"
      />

      <Box
        display={{ base: display, md: 'flex' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          pt={{ base: '4', md: '0' }}
          spacing={4}
        >
          {/* Navigation Links updated to match the category tags style */}
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>Trending</Link>
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>All Free</Link>
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>Video</Link>
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>New</Link>
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>Top Rated</Link>
          <Link href='#' px={2} py={1} rounded={'md'} bg='gray.700' _hover={{ bg: 'gray.600' }}>Submit Tool</Link>
          <Button
            variant="solid"
            backgroundColor={accentColor}
            color="white"
            _hover={{ bg: 'gray.600' }}
          >
            Join for Free
          </Button>
        </Stack>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        align="center"
        justify="space-between"
      >
        <Button variant="ghost" colorScheme="teal">
          <FaTwitter />
        </Button>
        <Button variant="ghost" colorScheme="teal">
          <FaLinkedin />
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
