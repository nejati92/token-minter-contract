const erc721Token = artifacts.require("erc721Token");

module.exports = async function (deployer) {
    await deployer.deploy(erc721Token, "erc721Token", "erc721Token")
    const erc721 = await erc721Token.deployed()
};