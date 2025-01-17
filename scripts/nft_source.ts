import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
    let userInterfaceAddr = `0xEC241bFa4d398014D58bdceEBd425614618B81A1`;
    const UserInterface = await ethers.getContractFactory("UserInterface");
    const userInterface = UserInterface.attach(userInterfaceAddr);

    const source = fs
        .readFileSync(path.resolve(__dirname, "nft_source_to_put.txt"))
        .toString();

    console.log(`Setting it up on blockchain`);
    let tx = await userInterface.setNftSource(source);
    await tx.wait();

    console.log(`Token Source:\n\n`);

    let tokenSource = await userInterface.tokenSource();

    console.log(tokenSource);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
