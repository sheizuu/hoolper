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
const hardhat_1 = require("hardhat");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let userInterfaceAddr = `0xEC241bFa4d398014D58bdceEBd425614618B81A1`;
        const UserInterface = yield hardhat_1.ethers.getContractFactory("UserInterface");
        const userInterface = UserInterface.attach(userInterfaceAddr);
        const source = fs_1.default
            .readFileSync(path_1.default.resolve(__dirname, "nft_source_to_put.txt"))
            .toString();
        console.log(`Setting it up on blockchain`);
        let tx = yield userInterface.setNftSource(source);
        yield tx.wait();
        console.log(`Token Source:\n\n`);
        let tokenSource = yield userInterface.tokenSource();
        console.log(tokenSource);
    });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
//# sourceMappingURL=nft_source.js.map