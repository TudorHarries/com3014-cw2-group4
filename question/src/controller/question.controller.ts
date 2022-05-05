import { Request, Response } from 'express';
import { createQyestionInput } from '../schema/question.schema';
import { createQuestion } from '../service/question.service';
import logger from "../utils/logger";

export async function createQuestionHandler(req: Request<{}, {}, createQyestionInput['body']>, res: Response) {
    try {
        const dbName = "test";
        const collectionName = "questions";
        const question = await createQuestion(dbName, collectionName, req.body);
        return res.send(question);
    }
    catch (e: any) {
        logger.error(e)
        return res.status(404)
    }
}