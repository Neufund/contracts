const Registery = artifacts.require("Registery");
const KYCRegistery = artifacts.require("KYCRegistery");
const Faucet = artifacts.require("Faucet");
const NeufundICO = artifacts.require("NeufundICO");

module.exports = function(deployer) {
  deployer.deploy([
    [Registery],
    [KYCRegistery],
    [Faucet],
    [NeufundICO]
  ])

  // Connect contracts

  // Set contracts in registery
  const registery = await Registery.deployed();
  registery.register('KYCRegistery', KYCRegistery.address);
  registery.register('Faucet', Faucet.address);
  registery.register('NeufundICO', NeufundICO.address);
};
