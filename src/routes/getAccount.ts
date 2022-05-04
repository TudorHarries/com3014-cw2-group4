import express from "express";
import bodyParser from "body-parser";
import { getAccount } from "../scripts/db";

const dbName = "test";
const collectionName = "accounts";
export const getAccountRouter = express.Router();

getAccountRouter.get("/account/:email", bodyParser.json(), async (req, res) => {
  const { email } = req.params;
  const result = await getAccount(dbName, collectionName, email);

  res.send(result);
});
