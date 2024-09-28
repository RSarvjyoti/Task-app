import { useState, useContext } from 'react';
import { TeamContext } from '../../context/TeamContext';
import { Box, Button, Input } from '@chakra-ui/react';

const InviteUserForm = ({ teamId }) => {
  const [email, setEmail] = useState('');
  const { inviteUser } = useContext(TeamContext);

  const handleInvite = () => {
    inviteUser(teamId, email);
    setEmail('');
  };

  return (
    <Box>
      <Input
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleInvite} colorScheme="blue">
        Invite User
      </Button>
    </Box>
  );
};

export default InviteUserForm;
