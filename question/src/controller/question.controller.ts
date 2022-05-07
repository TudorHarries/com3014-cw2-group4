import { Request, Response } from 'express';
import { createQuestionInput } from '../schema/question.schema';
import { createQuestion, getQuestion } from '../service/question.service';
import logger from "../utils/logger";

export async function createQuestionHandler(req: Request<{}, {}, createQuestionInput['body']>, res: Response) {
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

export async function getQuestionHandler(req: Request, res: Response) {
    try {
        const dbName = "test";
        const collectionName = "questions";
        const questions = await getQuestion(dbName, collectionName, req.params.question);
        return res.send(questions);
    }
    catch (e: any) {
        logger.error(e)
        return res.status(404)
    }
}