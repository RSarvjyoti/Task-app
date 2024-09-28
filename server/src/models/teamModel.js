const {Schema, model} = require('mongoose');

const teamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

const Team = model('Team', teamSchema);

module.exports = Team;