/* global artifacts contract it assert web3 */
const OwnedHelper = artifacts.require('./helpers/OwnedHelper.sol');

contract('Owned', (accounts) => {
  it('should send balance to owner after death', async () => {
    const owned = await OwnedHelper.new({
      from: accounts[0],
      value: web3.toWei('10', 'ether'),
    });
    const owner = await owned.owner();
    const initBalance = web3.eth.getBalance(owner);
    await owned.terminate([], { from: owner });
    const newBalance = web3.eth.getBalance(owner);

    assert.isTrue(newBalance > initBalance);
  });
  it('should send transfer ownership', async () => {
    // TODO
  });
  it('should only allow owner to transfer ownership', async () => {
    // TODO
  });
  it('should only allow owner to terminate', async () => {
    // TODO
  });
});
