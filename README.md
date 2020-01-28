* You need to have truffel and ganche installed.
* npm install -g truffle
* download ganache and run on port 8545

# Compile
* npm install
* truffle compile
* truffle migrate

# To Run test
* truffle test
* you will need to have ganache running on port 8545 to this work!

# Deploy
* truffle migrate --network ropsten

* This uses my infura account to deploy to the ropsten network, the api key is hardcoded in the truffle-config.js file.

* Also uses my metamask account where my ROPSTEN_MNEMONIC is hard coded.

