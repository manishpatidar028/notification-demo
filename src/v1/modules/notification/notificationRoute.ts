import { Router } from 'express';
import { NotificationController } from './notificationController';

const router: Router = Router();
const notificationController = new NotificationController();

/* Routes goes here */
router.get('/event', notificationController.getNotification);
router.get('/new-event', notificationController.getUpdatedNotification);

export const notificationRoutes: Router = router;