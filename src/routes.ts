import * as express from 'express';
import { notificationRoutes } from './v1/modules/notification/notificationRoute';

export class Routes {
    constructor() { }

    public path() {
        const router = express.Router();
        router.use("/notification-info", notificationRoutes);
        router.all("/*", (req: any, res) => {
            return res.status(400).json({
                error: "Route not found",
            });
        });
        return router;
    }
}
