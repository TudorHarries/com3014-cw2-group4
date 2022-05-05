"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAccount_1 = require("./routes/getAccount");
const postCreateAccount_1 = require("./routes/postCreateAccount");
const postLogin_1 = require("./routes/postLogin");
const putPermissions_1 = require("./routes/putPermissions");
const app = (0, express_1.default)();
const port = 8080;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("", postCreateAccount_1.postCreateAccountRouter);
app.use("", getAccount_1.getAccountRouter);
app.use("", postLogin_1.postLoginRouter);
app.use("", putPermissions_1.putPermissionsRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map