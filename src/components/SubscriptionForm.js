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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const subscriptionEndpoint = '/.netlify/functions/subscribe'; // Updated to use the Netlify function endpoint
    try {
      const response = await fetch(subscriptionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: 'Subscription successful.',
          description: "We've added your email to our mailing list.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setEmail(''); // Clear the input after successful subscription
      } else {
        toast({
          title: 'Subscription failed.',
          description: "There was an issue adding your email to our mailing list.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Network error.',
        description: "There was a problem connecting to the subscription service.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
            bg={useColorModeValue('blue.500', 'blue.300')}
            color={useColorModeValue('white', 'gray.800')}
            width="full"
          >
            Subscribe
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SubscriptionForm;
