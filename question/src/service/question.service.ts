//import { DocumentDefinition } from "mongoose";
//import questionModel, { questionDocument } from "../model/question.model";
import { connectToCollection, connectToClient } from "../utils/connect"

//export async function createQuestion(input: DocumentDefinition<questionDocument>) {
//  try {
//     return await questionModel.create(input)
// }
// catch (e) {
//    throw new Error(e as string);
// }
//}

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