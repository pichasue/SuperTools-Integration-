import React, { useState } from 'react';
import { Box, Flex, Text, Button, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [display, setDisplay] = useState('none');
  // Updated color scheme to match the logo
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'white');
  const primaryColor = useColorModeValue('#319795', '#319795'); // Teal color from the logo
  const accentColor = useColorModeValue('#DAA520', '#DAA520'); // Gold color for accents

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
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          pt={{ base: '4', md: '0' }}
        >
          {/* Navigation Links */}
          <Text mr={5} color={primaryColor}>All</Text>
          <Text mr={5} color={primaryColor}>GPTs</Text>
          <Text mr={5} color={primaryColor}>Top Picks</Text>
          <Text mr={5} color={primaryColor}>Submit</Text>
          <Button
            variant="solid"
            backgroundColor={primaryColor}
            color="white"
            _hover={{ bg: accentColor }}
          >
            Join for Free
          </Button>
        </Flex>
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
