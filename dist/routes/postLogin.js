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
exports.postLoginRouter = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("../scripts/db");
const bcrypt_1 = require("bcrypt");
const dbName = "test";
const collectionName = "accounts";
exports.postLoginRouter = express_1.default.Router();
exports.postLoginRouter.post("/login", body_parser_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { hashedPassword } = yield (0, db_1.getAccount)(dbName, collectionName, body.email);
    // Check that an account was returned
    yield (0, bcrypt_1.compare)(body.hashedPassword, hashedPassword);
    // res.send(result.acknowledged);
}));
//# sourceMappingURL=postLogin.js.map