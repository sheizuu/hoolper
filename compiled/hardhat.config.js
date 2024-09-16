"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-abi-exporter");
require("./scripts/set_js_source");
// const INFURA_API_KEY = process.env.HARDHAT_VAR_INFURA_API_KEY as string;
const AVALANCHE_FUJI_RPC = process.env.HARDHAT_VAR_AVALANCHE_FUJI_RPC;
// const AVALANCHE_FUJI_RPC = `https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}`;
const AVALANCHE_FUJI_PRIVATE_KEY = process.env.HARDHAT_VAR_AVALANCHE_FUJI_PRIVATE_KEY;
const config = {
    etherscan: {
        apiKey: {
            avalanche_fuji: '7XBV38UGEZRD91XJAS885XVJX2Q34VTD1G'
        },
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
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map