import { Response } from 'express';
import * as fs from "fs";

export class NotificationController {

    /* To access json file */
    dataPath = 'src/helpers/invitations.json';
    dataPath2 = 'src/helpers/invitations_update.json';

    /* To get notification */
    public getNotification = async (req: any, res: Response) => {
        fs.readFile(this.dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    }

    /* To get latest notification */
    public getUpdatedNotification = async (req: any, res: Response) => {
        fs.readFile(this.dataPath2, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    }
}