import express from "express";
import bodyParser from "body-parser";
import { getAccount } from "../database/db";

const dbName = "test";
const collectionName = "accounts";
export const getAccountRouter = express.Router();

getAccountRouter.get("/account/:email", bodyParser.json(), async (req, res) => {
  const { email } = req.params;
  const account = await getAccount(dbName, collectionName, email);

  res.send(account);
});
