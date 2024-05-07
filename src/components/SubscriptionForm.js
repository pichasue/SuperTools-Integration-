import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useToast,
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

  return (
    <Box my={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor='email'>Subscribe to our newsletter</FormLabel>
          <Input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            isRequired
          />
          <Button
            mt={2}
            colorScheme='teal'
            type='submit'
            isFullWidth
          >
            Subscribe
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SubscriptionForm;
