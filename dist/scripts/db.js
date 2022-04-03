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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.createAccount = void 0;
const mongodb_1 = require("mongodb");
// Remember to change the password below! Should be stored securely in the env
const url = "mongodb+srv://admin:lWG62484a1t7NjDU@cluster0.fnojx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectToClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new mongodb_1.MongoClient(url);
    return yield client.connect();
});
const connectToCollection = (dbName, collectionName, client) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = client.db(dbName).collection(collectionName);
    return collection;
});
const createAccount = (dbName, collectionName, account) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield connectToClient();
    const collection = yield connectToCollection(dbName, collectionName, client);
    const result = yield collection.insertOne(account);
    yield client.close();
    return result;
});
exports.createAccount = createAccount;
const getAccount = (dbName, collectionName, email) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield connectToClient();
    const collection = yield connectToCollection(dbName, collectionName, client);
    const result = yield collection.findOne({ email });
    yield client.close();
    return result;
});
exports.getAccount = getAccount;
//# sourceMappingURL=db.js.map