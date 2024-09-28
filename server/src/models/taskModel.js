const { Schema, model } = require("mongoose");

const taskSchema = new Schema({

  // title, description, priority, deadline, status (e.g., To Do, In Progress, Done), and assignee.

  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  deadline: { type: Date },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
});

// Automatically update `updatedAt` before saving
taskSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Task = model("Task", taskSchema);

module.exports = Task;
