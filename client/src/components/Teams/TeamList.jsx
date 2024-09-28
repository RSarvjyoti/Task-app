import { useContext } from 'react';
import { TeamContext } from '../../context/TeamContext';
import { Box, Text } from '@chakra-ui/react';

const TeamList = () => {
  const { teams } = useContext(TeamContext);

  return (
    <Box>
      {teams.map((team) => (
        <Box key={team.id} borderWidth="1px" p={4} mb={2}>
          <Text>{team.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default TeamList;
