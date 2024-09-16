import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";

describe("UserInterface", function () {
  
  async function deployUserInterface() {
    
    let chainLinkRouter = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
    
    let chainLinkSubId = 12437;
    
    let chainLinkDonId = "0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000";

    
    let url = "https://avalanche-fuji-c-chain-rpc.publicnode.com";

    
    const [owner, otherAccount] = await ethers.getSigners();

    const UserInterface = await ethers.getContractFactory("UserInterface");
    const userInterface = await UserInterface.deploy(chainLinkRouter, chainLinkSubId, chainLinkDonId, url);

    return { userInterface, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { userInterface } = await loadFixture(deployUserInterface);


    });

  });

});
