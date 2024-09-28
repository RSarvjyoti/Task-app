import { useContext } from 'react';
import { TeamContext } from '../../context/TeamContext';
import TaskList from '../Tasks/TaskList';
import { Box } from '@chakra-ui/react';

const TeamBoard = ({ teamId }) => {
  const { teams } = useContext(TeamContext);
  const team = teams.find((team) => team.id === teamId);

  return (
    <Box>
      <h1>{team.name} Board</h1>
      <TaskList />
    </Box>
  );
};

export default TeamBoard;
