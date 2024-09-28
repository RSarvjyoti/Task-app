const Team = require("../models/teamModel");
const User = require("../models/userModel");


// Create a new team
const createTeam = async (req, res) => {
  const { name, members } = req.body;

  try {
    // Check if the team name already exists
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(400).json({ error: 'Team name already exists' });
    }

    // Create a new team
    const team = new Team({ name, members: [req.user._id, ...members] });
    await team.save();

    // Add team to the members' list
    await User.updateMany(
      { _id: { $in: [req.user._id, ...members] } },
      { $push: { teams: team._id } }
    );

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Invite a member to the team
const inviteMember = async (req, res) => {
  const { email } = req.body;
  const { teamId } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    if (team.members.includes(user._id)) {
      return res.status(400).json({ error: 'User is already a member of this team' });
    }

    // Add the user to the team's members
    team.members.push(user._id);
    await team.save();

    // Add the team to the user's team list
    user.teams.push(team._id);
    await user.save();

    res.status(200).json({ message: 'User successfully invited to the team' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get tasks for a specific team
const getTeamTasks = async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findById(teamId).populate('tasks');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json(team.tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createTeam, inviteMember, getTeamTasks}