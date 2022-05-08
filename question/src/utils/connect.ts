
import { MongoClient } from "mongodb";

const db = 'mongodb+srv://admin:YgeZjelG7WIizmiY@cluster0.ovcmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

export const connectToClient = async () => {

    const client: MongoClient = new MongoClient(db);

    return await client.connect();
};

export const connectToCollection = async (
    dbName: string,
    collectionName: string,
    client: MongoClient
) => {

    const collection = client.db(dbName).collection(collectionName);

    return collection;
};


