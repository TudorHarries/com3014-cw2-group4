//import { DocumentDefinition } from "mongoose";
//import questionModel, { questionDocument } from "../model/question.model";
import { connectToCollection, connectToClient } from "../utils/connect"


type Question = {
    prompt_text: string,
    answer_text: string
}
export const createQuestion = async (
    dbName: string,
    collectionName: string,
    question: Question
) => {
    const client = await connectToClient();
    const collection = await connectToCollection(dbName, collectionName, client);
    const result = await collection.insertOne(question);
    await client.close();
    return result;

};