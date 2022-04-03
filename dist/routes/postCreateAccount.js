"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCreateAccountRouter = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("../scripts/db");
const dbName = "test";
const collectionName = "accounts";
exports.postCreateAccountRouter = express_1.default.Router();
exports.postCreateAccountRouter.post("/account", body_parser_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const account = req.params;
    const result = yield (0, db_1.createAccount)(dbName, collectionName, account);
    res.send(result.acknowledged);
}));
//# sourceMappingURL=postCreateAccount.js.map