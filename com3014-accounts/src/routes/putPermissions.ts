import express from "express";
import bodyParser from "body-parser";
import { Account } from "../types/Account";
import { updatePermissions } from "../scripts/db";

const dbName = "test";
const collectionName = "accounts";
export const putPermissionsRouter = express.Router();

putPermissionsRouter.put(
  "/permissions",
  bodyParser.json(),
  async (req: express.Request<Pick<Account, "permissions" | "email">>, res) => {
    const { permissions, email } = req.body;

    const result = await updatePermissions(
      dbName,
      collectionName,
      email,
      permissions
    );
    res.send(result);
  }
);
