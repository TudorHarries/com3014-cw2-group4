import express from "express";
import { postCreateAccountRouter } from "./routes/postCreateAccount";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("", postCreateAccountRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


