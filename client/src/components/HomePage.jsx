import { Box, Heading, Text, SimpleGrid, Card, CardBody, Stack, Icon } from '@chakra-ui/react';
import { FaTasks, FaUsers, FaInfoCircle } from 'react-icons/fa';

function HomePage() {
  return (
    <Box h={'100vh'} p={5}>
      <Heading mb={6}>Welcome to the Task Manager</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Card>
          <CardBody>
            <Stack spacing={3} textAlign="center">
              <Icon as={FaInfoCircle} boxSize="40px" color="teal.500" />
              <Heading size="md">Overview</Heading>
              <Text>
                Our Task Manager helps you organize and track tasks effectively. Manage tasks, 
                assign them to team members, and keep track of their status.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stack spacing={3} textAlign="center">
              <Icon as={FaTasks} boxSize="40px" color="teal.500" />
              <Heading size="md">Task Management</Heading>
              <Text>
                Create, edit, and delete tasks. Assign tasks to team members and track their progress.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stack spacing={3} textAlign="center">
              <Icon as={FaUsers} boxSize="40px" color="teal.500" />
              <Heading size="md">Team Management</Heading>
              <Text>
                Create teams, invite members, and manage tasks across different teams.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
