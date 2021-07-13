import * as express from "express";
import { Routes } from "./routes";
import * as bodyParser from 'body-parser';

const app: express.Application = express();
const port = 5000;
const routes = new Routes();

/** Routes go here */
app.use("/api/v1", routes.path());

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, token, x-device-type, x-app-version, x-build-number, uuid,x-auth-token,X-L10N-Locale");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
    } else {
        next();
    }
});

app.listen(port, () => console.log("server up"));
