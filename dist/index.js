"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_wallet_1 = __importDefault(require("ethereumjs-wallet"));
class A {
    constructor() {
        console.log("A");
    }
    con() {
        console.log("con");
    }
    create() {
        console.log("create");
        const wallet = ethereumjs_wallet_1.default.generate();
        console.log("pk : ", wallet.getPrivateKeyString());
        console.log("Address : ", wallet.getPublicKeyString());
    }
}
