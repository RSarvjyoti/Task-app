import { useState } from 'react';
import { Box, Button, Input, Text, Stack } from '@chakra-ui/react';
import { useAuth } from '../../context/AuthContext'; // Correctly importing the AuthContext

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signup } = useAuth();  // Using signup function from AuthContext

  const handleSignup = async () => {
    try {
      await signup(username, email, password);  // Async signup call using the context API
      setSuccess('Signup successful! You can now log in.');
      setError('');
    } catch (err) {
      setError('Signup failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box p={6} maxW="400px" mx="auto" mt={10}>
      <Stack spacing={4}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
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
        {success && <Text color="green.500">{success}</Text>} {/* Success message */}
        <Button onClick={handleSignup} colorScheme="green" width="full">
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default SignupForm;
