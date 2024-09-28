const Notification = require("../models/notification");

const createNotification = async (req, res) => {
  const { userId, message, taskId, read = false } = req.body;

  try {
    const notification = new Notification({
      userId,
      message,
      taskId,
      read,
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notifications for a user
const getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark a notification as read
const markAsRead = async (req, res) => {
  const { notificationId } = req.params;

  try {
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    notification.read = true;
    await notification.save();

    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark all notifications as read for a user
const markAllAsRead = async (req, res) => {
  const { userId } = req.params;

  try {
    await Notification.updateMany({ userId, read: false }, { $set: { read: true } });
    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNotification,
  getUserNotifications,
  markAsRead,
  markAllAsRead,
};
