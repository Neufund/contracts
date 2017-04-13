/* global artifacts */
const Registery = artifacts.require('Registery');
const KYCRegistery = artifacts.require('KYCRegistery');
const Faucet = artifacts.require('Faucet');
const FaucetManager = artifacts.require('FaucetManager');
const Neumark = artifacts.require('Neumark');
const EuroToken = artifacts.require('EuroToken');
const EthEurTrader = artifacts.require('EthEurTrader');
const NeukeyNotary = artifacts.require('NeukeyNotary');
const LimitedPartnerAgreement = artifacts.require('LimitedPartnerAgreement');

module.exports = (deployer) => {
  // Deploy contracts
  const contracts = [
    Registery,
    Faucet,
    FaucetManager,
    KYCRegistery,
    NeukeyNotary,
    EuroToken,
    EthEurTrader,
    LimitedPartnerAgreement,
    Neumark,
  ];
  deployer.deploy(contracts);
};
