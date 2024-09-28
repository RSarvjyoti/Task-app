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

        if (!title || !description || !assignee) {
            return res.status(400).json({ message: "Title, description, and assignee are required" });
        }

        const newTask = new Task({
            title,
            description,
            priority,
            deadline,
            status,
            assignee,
        });

        await newTask.save(); 
        res.status(201).json(newTask); 

    }catch(err) {
        res.status(500).json({ message: "Failed to create task", error: err.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params; 
        console.log("Updating task with ID:", id); 

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const existingTask = await Task.findById(id);
        if (!existingTask) {
            return res.status(404).json({ message: "Task not found" });
        }

       
        const updates = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

    
        res.status(200).json(updatedTask); 
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: "Failed to update task", error: err.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

 
        console.log("Deleting Task with ID:", id);

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }


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