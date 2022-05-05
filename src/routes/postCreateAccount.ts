import express from "express";
import bodyParser from "body-parser";
import { Account } from "../types/Account";
import { createAccount } from "../scripts/db";
import { hash } from "bcryptjs";

const dbName = "test";
const collectionName = "accounts";
export const postCreateAccountRouter = express.Router();

postCreateAccountRouter.post(
  "/account",
  bodyParser.json(),
  async (req: express.Request<Account>, res) => {
    const account = req.body;
    const hashedPassword = await hash(account.password, 10);
    const result = await createAccount(dbName, collectionName, {
      ...account,
      password: hashedPassword,
    });
    res.send(result.acknowledged);
  }
);
