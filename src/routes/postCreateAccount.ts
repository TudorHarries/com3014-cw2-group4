import express from "express";
import bodyParser from "body-parser";
import { Account } from "../types/Account";
import { createAccount } from "../scripts/db";

const dbName = "test";
const collectionName = "accounts";
export const postCreateAccountRouter = express.Router();

postCreateAccountRouter.post(
  "/account",
  bodyParser.json(),
  async (req: express.Request<Account>, res) => {
    const account = req.body;
    const result = await createAccount(dbName, collectionName, account);
    res.send(result.acknowledged);
  }
);
