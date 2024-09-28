import { createContext, useState } from 'react';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  const createTeam = (team) => {
    setTeams((prevTeams) => [...prevTeams, team]);
  };

  const inviteUser = (teamId, email) => {
    // Handle user invitation logic
    console.log(`User invited to team ${teamId}: ${email}`);
  };

  return (
    <TeamContext.Provider value={{ teams, createTeam, inviteUser }}>
      {children}
    </TeamContext.Provider>
  );
};
