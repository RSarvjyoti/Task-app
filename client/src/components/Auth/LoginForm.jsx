import { useState } from 'react';
import { Box, Button, Input, Text, Stack, useToast } from '@chakra-ui/react';
import { useAuth } from '../../context/AuthContext';  // Correctly importing the AuthContext
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();  // Using login function from AuthContext
  const toast = useToast(); // Chakra UI toast
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleLogin = async () => {
    try {
      await login(email, password); // Async login call using the context API
      setError('');
      
      // Show success toast notification
      toast({
        title: 'Login successful!',
        description: 'You have been successfully logged in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Redirect to tasks page after successful login
      navigate('/tasks');
    } catch (err) {
      console.log(err);
      
      // Show error toast notification
      toast({
        title: 'Login failed!',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box p={6} maxW="400px" mx="auto" mt={10}>
      <Stack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Text color="red.500">{error}</Text>} {/* Error message */}
        <Button onClick={handleLogin} colorScheme="blue" width="full">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
