"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const config_1 = require("hardhat/config");
(0, config_1.task)("set-js-source", "Writes to the smartcontract the Javascript code that verifies transaction").
    addParam("address", "UserInterface address").
    addParam("type", "Set NFT recovery or Token recovery script").
    setAction((taskArgs, hre) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const UserInterfaceFactory = yield hre.ethers.getContractFactory("UserInterface");
        const userInterface = UserInterfaceFactory.attach(taskArgs.address);
        const jsType = taskArgs.type;
        if (jsType === undefined) {
            console.error(`'type' must be 'NFT' or 'ERC20'`);
            return;
        }
        const fileName = jsType === "NFT" ? "nft_source_to_put.txt" : "token_source_to_put.txt";
        const source = fs.readFileSync(path.resolve(__dirname, fileName)).toString();
        console.log(`Setting JS code for ${jsType} up on blockchain`);
        let tx = yield userInterface.setTokenSource(source);
        yield tx.wait();
        console.log(`JS Code was set successfully`);
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=set_js_source.js.map