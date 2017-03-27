/* global artifacts contract it assert web3 */
const OwnedHelper = artifacts.require('./helpers/OwnedHelper.sol')

contract('Owned', function (accounts) {
  it('should send balance to owner after death', async function () {
    let owned = await OwnedHelper.new({
      from: accounts[0],
      value: web3.toWei('10', 'ether')
    })
    let owner = await owned.owner()
    let initBalance = web3.eth.getBalance(owner)
    await owned.terminate([], { from: owner })
    let newBalance = web3.eth.getBalance(owner)

    assert.isTrue(newBalance > initBalance)
  })
  it('should send transfer ownership', async function () {
    // TODO
  })
  it('should only allow owner to transfer ownership', async function () {
    // TODO
  })
  it('should only allow owner to terminate', async function () {
    // TODO
  })
})
