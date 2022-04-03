import express from "express";
import { getAccountRouter } from "./routes/getAccount";
import { postCreateAccountRouter } from "./routes/postCreateAccount";
import { postLoginRouter } from "./routes/postLogin";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("", postCreateAccountRouter);
app.use("", getAccountRouter);
app.use("", postLoginRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
