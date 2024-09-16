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
const hardhat_1 = require("hardhat");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let router = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
        let subId = 12437;
        // Fuji:
        let donId = "0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000";
        const userInterface = yield hardhat_1.ethers.deployContract("UserInterface", [router, subId, donId], {});
        yield userInterface.waitForDeployment();
        console.log(`User interface was deployed to ${userInterface.target}`);
    });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
//# sourceMappingURL=user_interface.js.map