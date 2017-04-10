/* global artifacts */
/* eslint-disable no-console */
const Registery = artifacts.require('Registery');
const KYCRegistery = artifacts.require('KYCRegistery');
const Faucet = artifacts.require('Faucet');
const FaucetManager = artifacts.require('FaucetManager');
const Neumark = artifacts.require('Neumark');
const EuroToken = artifacts.require('EuroToken');
const EthEurTrader = artifacts.require('EthEurTrader');
const NeukeyNotary = artifacts.require('NeukeyNotary');
const NeufundICO = artifacts.require('NeufundICO');

module.exports = async (deployer, network, accounts) => {
    // Roles
  const owner = accounts[0];
  const faucetAdmin = owner;
  const kycValidator = owner;
  const notary = owner;
  const trader = owner;
  const depositManager = owner;
    // Log role assignment
  console.log('\nRole assignemnt:');
  console.log(` * owner: \t${owner}`);
  console.log(` * faucetAdmin: \t${faucetAdmin}`);
  console.log(` * kycValidator: \t${kycValidator}`);
  console.log(` * notary: \t${notary}`);
  console.log(` * trader: \t${trader}`);
  console.log(` * depositManager: \t${depositManager}`);
  console.log('');

  const registery = await Registery.deployed();
  const faucet = await Faucet.deployed();
  const faucetManager = await FaucetManager.deployed();
  const kyc = await KYCRegistery.deployed();
  const neukeyNotary = await NeukeyNotary.deployed();
  const euroToken = await EuroToken.deployed();
  const ethEurTrader = await EthEurTrader.deployed();
  const ico = await NeufundICO.deployed();

    // faucetManger is a relay contract relaying Faucet; do a typecast
  const faucetRelay = Faucet.at(faucetManager.address);

  console.log('Linking contracts');
  await Promise.all([
    faucetManager.multiplex_target(faucet.address),
    faucetManager.multiplex_add(neukeyNotary.address),
    faucet.set_manager(faucetManager.address),
    neukeyNotary.set_faucet(faucetManager.address),
  ]);

  console.log('Linking roles');
  await Promise.all([
    faucetManager.multiplex_add(faucetAdmin),
    kyc.set_validator(kycValidator),
    neukeyNotary.set_notary(notary),
    ethEurTrader.set_trader(trader),
    euroToken.set_deposit_manager(depositManager),
  ]);

  console.log('Registring notary on the faucet');
  await faucetRelay.register(notary);

  console.log('registring contracts in the Registry');
  await Promise.all([
    registery.register('Faucet', faucet.address),
    registery.register('KYCRegistery', KYCRegistery.address),
    registery.register('NeukeyNotary', NeukeyNotary.address),
    registery.register('EuroToken', EuroToken.address),
    registery.register('EthEurTrader', EthEurTrader.address),
    registery.register('Neumark', Neumark.address),
    registery.register('NeufundICO', ico.address),
  ]);
};
