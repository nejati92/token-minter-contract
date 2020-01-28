import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
const {
    expect,
    assert
} = chai

var MyERC721 = artifacts.require("erc721Token");

contract('Testing ERC721 contract', function (accounts) {

    let token;
    const name = "erc721Token";
    const symbol = "erc721Token"

    const account1 = accounts[1]
    const tokenId1 = 1;
    const tokenUri1 = "http://api.adorable.io/avatars/285/1.png"; // Does not have to be unique

    const account2 = accounts[2]
    const tokenId2 = 2;
    const tokenUri2 = "http://api.adorable.io/avatars/285/2.png"; // Does not have to be unique

    const account3 = accounts[3]

    it('should be able to deploy and mint ERC721 token', async () => {
        token = await MyERC721.new(name, symbol)
        await token.mintUniqueTokenTo(account1, tokenId1, tokenUri1, {
            from: accounts[0]
        })

        expect(await token.symbol()).to.equal(symbol)
        expect(await token.name()).to.equal(name)
    })

    it(' should rejected by evm', async () => {
        try {
            await token.mintUniqueTokenTo(account1, tokenId1, tokenUri2, {
                from: accounts[0]
            })
        } catch (e) {
            expect(e.message).to.be.equal('Returned error: VM Exception while processing transaction: revert')
        }

    })

    it(' should allow creation of multiple unique tokens and manage ownership', async () => {
        await token.mintUniqueTokenTo(account2, tokenId2, tokenUri2, {
            from: accounts[0]
        })
        expect(Number(await token.totalSupply())).to.equal(2)

        expect(await token.exists(tokenId1)).to.be.true
        expect(await token.exists(tokenId2)).to.be.true

        expect(await token.ownerOf(tokenId1)).to.equal(account1)
        expect(await token.ownerOf(tokenId2)).to.equal(account2)
    })
})