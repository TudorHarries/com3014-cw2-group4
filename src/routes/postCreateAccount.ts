import express from "express";
import bodyParser from "body-parser";

export const postCreateAccountRouter = express.Router();

postCreateAccountRouter.get("/account", bodyParser.json(), (req, res) => {
//   const title = (req.params.title as unknown) as Pick<Lesson, "title">;
//   getLesson(title).send((err, data) =>
//     err ? res.send(err) : res.send(data.Item)
//   );
});
