import { Express, Request, Response } from "express";
import { createQuestionHandler, getQuestionHandler } from "./controller/question.controller";
import validateResource from './middleware/validateResource';
import { createQuestionSchema } from "./schema/question.schema";
import bodyParser from "body-parser";


function routes(app: Express) {

    app.get('/healthcheck', (req, res) => res.sendStatus(200));

    app.get("/api/questions/:question", getQuestionHandler);

    app.post("/api/questions", bodyParser.json(), validateResource(createQuestionSchema), createQuestionHandler);

}

export default routes;