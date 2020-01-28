// Allows us to use ES6 in our migrations and tests.
require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("truffle-hdwallet-provider");

// Infura API key and Metamask 12 word mnemonic, keep these secrets on your .gitignore!

const ROPSTEN_MNEMONIC =
  "pave churn stand anxiety cable rabbit deer enable jacket cousin area same";
const INFURA_API_KEY = "73ee469f1e0540e1871cf2f6fec2cfc8"; // secret 3e02862b68cc4366a0ef8a00789d4ddb

module.exports = {
  compilers: {
    solc: {
      version: "0.4.25"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" 
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          ROPSTEN_MNEMONIC,
          `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
        );
      },
      network_id: 3
    }
  }
};
