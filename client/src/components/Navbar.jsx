import { Box, Flex, Button, useDisclosure, VStack, Collapse } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.500" color="white" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Box>
          <Button as={Link} to="/" colorScheme="teal" variant="solid" mr={4}>Home</Button>
          <Button as={Link} to="/login" colorScheme="teal" variant="solid" mr={4}>Login</Button>
          <Button as={Link} to="/signup" colorScheme="teal" variant="solid" mr={4}>Sign Up</Button>
          <Button as={Link} to="/tasks" colorScheme="teal" variant="solid" mr={4}>Tasks</Button>
          <Button as={Link} to="/teams" colorScheme="teal" variant="solid">Teams</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
