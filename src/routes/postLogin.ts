import express from "express";
import bodyParser from "body-parser";
import { Account } from "../types/Account";
import { getAccount } from "../scripts/db";
import { compare } from "bcrypt";

const dbName = "test";
const collectionName = "accounts";
export const postLoginRouter = express.Router();

postLoginRouter.post(
  "/login",
  bodyParser.json(),
  async (
    req: express.Request<Pick<Account, "email" | "hashedPassword">>,
    res
  ) => {
    const body = req.body;
    const account = await getAccount(dbName, collectionName, body.email);

    // We should return more descriptive stuff than just false
    const result =
      account != undefined
        ? await compare(body.hashedPassword, account.hashedPassword)
        : false;

    res.send(result);
  }
);
