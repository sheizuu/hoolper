import { ethers } from "hardhat";

async function main() {
    let router = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
    
    let subId = 12437;
    // Fuji:
    let donId = "0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000";

    const userInterface = await ethers.deployContract("UserInterface", [router, subId, donId], {});

    await userInterface.waitForDeployment();

    console.log(
      `User interface was deployed to ${userInterface.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
