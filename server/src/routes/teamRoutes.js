const {Router} = require('express');
const authenticateToken = require('../middlewere/authMiddleware');
const { createTeam, inviteMember, getTeamTasks } = require('../controllers/teamController');

const teamRoute = Router();

teamRoute.post('/', authenticateToken, createTeam);
teamRoute.post('/:teamId/invite', authenticateToken, inviteMember);
teamRoute.get('/:teamId/tasks', authenticateToken, getTeamTasks);

module.exports = teamRoute;