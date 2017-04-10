/* global artifacts */
const KYCRegistery = artifacts.require('KYCRegistery');
const Neumark = artifacts.require('Neumark');
const EuroToken = artifacts.require('EuroToken');
const LimitedPartnerAgreement = artifacts.require('LimitedPartnerAgreement');
const NeufundICO = artifacts.require('NeufundICO');

module.exports = (deployer) => {
  const contracts = [
    [NeufundICO,
      KYCRegistery.address,
      LimitedPartnerAgreement.address,
      EuroToken.address,
      Neumark.address]];
  deployer.deploy(contracts);
};
