import express from "express";
import { getAccountRouter } from "./routes/getAccount";
import { postCreateAccountRouter } from "./routes/postCreateAccount";
import { postLoginRouter } from "./routes/postLogin";
import { putPermissionsRouter } from "./routes/putPermissions";
import cors from "cors";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use("", postCreateAccountRouter);
app.use("", getAccountRouter);
app.use("", postLoginRouter);
app.use("", putPermissionsRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
