import express from "express";
import bodyParser from "body-parser";
import { Account } from "../types/Account";

export const postCreateAccountRouter = express.Router();

postCreateAccountRouter.get(
  "/account",
  bodyParser.json(),
  (req: express.Request<Account>, res) => {
    const { givenName, surname, hashedPassword, permissions } = req.params;
    //   getLesson(title).send((err, data) =>
    //     err ? res.send(err) : res.send(data.Item)
    //   );
  }
);
