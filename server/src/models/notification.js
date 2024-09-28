const {Schema, model} = require('mongoose');

const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  taskId: { type: Schema.Types.ObjectId, ref: 'Task' },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Notification = model('Notification', notificationSchema);

module.exports = Notification