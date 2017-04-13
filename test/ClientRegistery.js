/* global artifacts contract it assert web3 */
const ClientRegistery = artifacts.require('./neubank/ClientRegistery.sol');
const IClientRegistery = artifacts.require('./neubank/IClientRegistery.sol');
import expectThrow from './helpers/expectThrow';

contract('ClientRegistery', (accounts) => {
  let clientRegistery;
  let owner;
  let someone1;
  let someone2;
  let someone3;

  beforeEach(async () => {
    clientRegistery = await ClientRegistery.new();
    owner = await clientRegistery.owner();
    assert.equal(owner, accounts[0]);
    someone1 = accounts[1];
    someone2 = accounts[2];
    someone3 = accounts[3];
  });

  it('should allow owner to add clients', async () => {
    assert(!await clientRegistery.isClient(owner));
    assert(!await clientRegistery.isClient(someone1));
    assert(!await clientRegistery.isClient(someone2));
    assert(!await clientRegistery.isClient(someone3));
    await clientRegistery.addClient(someone1);
    assert(!await clientRegistery.isClient(owner));
    assert(await clientRegistery.isClient(someone1));
    assert(!await clientRegistery.isClient(someone2));
    assert(!await clientRegistery.isClient(someone3));
  });
  it('should allow owner to remove clients', async () => {
    assert(!await clientRegistery.isClient(owner));
    assert(!await clientRegistery.isClient(someone1));
    assert(!await clientRegistery.isClient(someone2));
    assert(!await clientRegistery.isClient(someone3));
    await clientRegistery.addClient(someone1);
    assert(!await clientRegistery.isClient(owner));
    assert(await clientRegistery.isClient(someone1));
    assert(!await clientRegistery.isClient(someone2));
    assert(!await clientRegistery.isClient(someone3));
    await clientRegistery.removeClient(someone1);
    assert(!await clientRegistery.isClient(owner));
    assert(!await clientRegistery.isClient(someone1));
    assert(!await clientRegistery.isClient(someone2));
    assert(!await clientRegistery.isClient(someone3));
  });
  it('should only allow owner to add clients', async () => {
    await expectThrow(clientRegistery.addClient(someone1, { from: someone2 }));
    assert(!await clientRegistery.isClient(someone1));
  });
  it('should only allow owner to remove clients', async () => {
    await clientRegistery.addClient(someone1);
    assert(await clientRegistery.isClient(someone1));
    await expectThrow(clientRegistery.removeClient(someone1, { from: someone2 }));
    assert(await clientRegistery.isClient(someone1));
  });
  it('should implement IClientRegistery', async () => {
    let iface = IClientRegistery.at(clientRegistery.address);
    assert(!await iface.isClient(someone1));
    await clientRegistery.addClient(someone1);
    assert(await iface.isClient(someone1));
  });
});
