const {Router} = require("express");
const { createTask, getAllTask, updateTask, deleteTask } = require("../controllers/taskController");
const authenticateToken = require("../middlewere/authMiddleware");

const taskRoute = Router();

taskRoute.post('/', authenticateToken, createTask);
taskRoute.get('/', authenticateToken, getAllTask);
taskRoute.patch('/:id', authenticateToken, updateTask);
taskRoute.delete('/:id', authenticateToken, deleteTask);

module.exports = taskRoute;