import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for subscription logic
    toast({
      title: 'Subscription successful.',
      description: "We've added your email to our mailing list.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  // Use brand colors for styling
  const bgColor = useColorModeValue('teal.500', 'teal.200');
  const color = useColorModeValue('white', 'gray.800');

  return (
    <Box my={4} bg={bgColor} p={5} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor='email' color={color}>Subscribe to our newsletter</FormLabel>
          <Input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            isRequired
            bg={useColorModeValue('white', 'gray.700')}
            color={color}
          />
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            isFullWidth
            bg={useColorModeValue('blue.500', 'blue.300')}
            color={useColorModeValue('white', 'gray.800')}
          >
            Subscribe
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SubscriptionForm;
