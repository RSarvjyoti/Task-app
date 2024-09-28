import { Box } from '@chakra-ui/react';
import TeamList from '../components/Teams/TeamList';
import InviteUserForm from '../components/Teams/InviteUserForm';

const TeamsPage = () => {
  return (
    <Box>
      <TeamList />
      <InviteUserForm />
    </Box>
  );
};

export default TeamsPage;
