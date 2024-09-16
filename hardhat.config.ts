import "dotenv/config";

import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-abi-exporter";
import "./scripts/set_js_source";

// const INFURA_API_KEY = process.env.HARDHAT_VAR_INFURA_API_KEY as string;
const AVALANCHE_FUJI_RPC = process.env.HARDHAT_VAR_AVALANCHE_FUJI_RPC as string;
// const AVALANCHE_FUJI_RPC = `https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}`;
const AVALANCHE_FUJI_PRIVATE_KEY = process.env.HARDHAT_VAR_AVALANCHE_FUJI_PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      avalanche_fuji: '' },
    customChains: [
      {
        network: "avalanche_fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api-testnet.snowscan.xyz/api",
          browserURL: "https://testnet.snowscan.xyz"
        }
      }
    ]
  },
  abiExporter: {
    path: "./website/src/utils/abi",
    clear: true,
    format: "json",
    flat: true,
  },
  solidity: "0.8.22",
  networks: {
    fuji: {
      url: AVALANCHE_FUJI_RPC,
      accounts: [AVALANCHE_FUJI_PRIVATE_KEY]
    },
  },
};

export default config;
