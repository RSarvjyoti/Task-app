const {Router} = require('express');
const { createNotification, getUserNotifications, markAsRead, markAllAsRead } = require('../controllers/notificationController');

const notificationRoute = Router();

notificationRoute.post('/', createNotification); 
notificationRoute.get('/:userId', getUserNotifications); 
notificationRoute.put('/:notificationId/read', markAsRead); 
notificationRoute.put('/:userId/read-all', markAllAsRead); 

module.exports = notificationRoute;
