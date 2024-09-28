const {Router} = require("express");
const { createTask, getAllTask, updateTask, deleteTask } = require("../controllers/taskController");
const authenticateToken = require("../middlewere/authMiddleware");

const taskRoute = Router();

taskRoute.post('/create-task', authenticateToken, createTask);
taskRoute.get('/get-all-task', authenticateToken, getAllTask);
taskRoute.patch('/update-task', authenticateToken, updateTask);
taskRoute.delete('/delete-task', authenticateToken, deleteTask);

module.exports = taskRoute;