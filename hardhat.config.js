require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // polygon testnet
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["228026fa8e40a5bf4e85d5bbe540890e7e733ea6e1dca6a9aa0325d4e438472f"] // your wallet private key
    },
    //polygon mainnet
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: ["228026fa8e40a5bf4e85d5bbe540890e7e733ea6e1dca6a9aa0325d4e438472f"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};