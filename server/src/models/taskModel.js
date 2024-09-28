const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  deadline: { type: Date },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  team: { type: Schema.Types.ObjectId, ref: 'Team' }
});

const Task = model('Task', taskSchema);

module.exports = Task;