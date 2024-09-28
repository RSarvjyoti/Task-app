const Task = require("../models/taskModel")

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find(); 
        if (!tasks) {
            return res.status(404).json({ message: "No tasks found" });
        }
        res.status(200).json(tasks); 
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: "Failed to retrieve tasks", error: err.message });
    }
};

const createTask = async (req, res) => {
    try{
        const { title, description, priority, deadline, status, assignee } = req.body;

        // Validate required fields
        if (!title || !description || !assignee) {
            return res.status(400).json({ message: "Title, description, and assignee are required" });
        }

        // Create a new task
        const newTask = new Task({
            title,
            description,
            priority,
            deadline,
            status,
            assignee,
        });

        await newTask.save(); // Save the new task to the database
        res.status(201).json(newTask); // Return the created task

    }catch(err) {
        res.status(500).json({ message: "Failed to create task", error: err.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params; // Get the task ID from the request parameters
        console.log("Updating task with ID:", id); // Log the ID

        // Check if the ID is a valid ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        // Check if the task exists
        const existingTask = await Task.findById(id);
        if (!existingTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Only update fields that are provided in the request body
        const updates = req.body;

        // Update the task
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

        // Respond with the updated task
        res.status(200).json(updatedTask); // Return the updated task
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Failed to update task", error: err.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        // Log the task ID for debugging
        console.log("Deleting Task with ID:", id);

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        // Find and delete the task
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error("Error deleting task:", err.message);
        res.status(500).json({ message: "Failed to delete task", error: err.message });
    }
};


module.exports = {getAllTask, createTask, updateTask, deleteTask};