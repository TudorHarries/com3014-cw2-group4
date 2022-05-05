import { MongoClient } from "mongodb";
import { Account } from "../types/Account";

// Remember to change the password below! Should be stored securely in the env
const url =
  "mongodb+srv://admin:lWG62484a1t7NjDU@cluster0.fnojx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

export const updatePermissions = async (
  dbName: string,
  collectionName: string,
  email: Pick<Account, "email">,
  permissions: Pick<Account, "permissions">
) => {
  const client = await connectToClient();
  const collection = await connectToCollection(dbName, collectionName, client);

  const result = await collection.updateOne(
    { email },
    { $set: { permissions } }
  );

  await client.close();

  return result;
};

export const getAccount = async (
  dbName: string,
  collectionName: string,
  email: string
) => {
  const client = await connectToClient();
  const collection = await connectToCollection(dbName, collectionName, client);

  const result = await collection.findOne<Account>({ email });

  await client.close();

  return result;
};
