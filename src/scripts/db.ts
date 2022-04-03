import { MongoClient } from "mongodb";
import { Account } from "../types/Account";
const url =
  "mongodb+srv://admin:<password>@cluster0.fnojx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToClient = async () => {
  const client: MongoClient = new MongoClient(url);

  return await client.connect();
};

const connectToCollection = async (
  dbName: string,
  collectionName: string,
  client: MongoClient
) => {
  const collection = client.db(dbName).collection(collectionName);

  return collection;
};

const createCollection = async (dbName: string, collectionName: string) => {
  const client = await connectToClient();

  client.db(dbName).createCollection(collectionName);

  await client.close();
};

export const createAccount = async (
  dbName: string,
  collectionName: string,
  account: Account
) => {
  const client = await connectToClient();
  const collection = await connectToCollection(dbName, collectionName, client);

  const result = await collection.insertOne(account);

  await client.close();

  return result;
};
