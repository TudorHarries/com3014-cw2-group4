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
exports.putPermissionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("../scripts/db");
const dbName = "test";
const collectionName = "accounts";
exports.putPermissionsRouter = express_1.default.Router();
exports.putPermissionsRouter.put("/permissions", body_parser_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { permissions, email } = req.body;
    console.log(req.body);
    const result = yield (0, db_1.updatePermissions)(dbName, collectionName, email, permissions);
    res.send(result);
}));
//# sourceMappingURL=putPermissions.js.map