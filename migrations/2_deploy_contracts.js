/* global artifacts */
const Registery = artifacts.require('Registery')
const KYCRegistery = artifacts.require('KYCRegistery')
const Faucet = artifacts.require('Faucet')
const NeufundICO = artifacts.require('NeufundICO')
const Neumark = artifacts.require('Neumark')
const BaseToken = artifacts.require('BaseToken')
const EuroToken = artifacts.require('EuroToken')
const LimitedPartnerAgreement = artifacts.require('LimitedPartnerAgreement')

module.exports = deployer => {
  deployer
    .deploy([
      [Registery],
      [KYCRegistery],
      [Faucet],
      [LimitedPartnerAgreement],
      [BaseToken, 'ℝℂ', 'Remcoin', 59],
      [EuroToken],
      [Neumark]
    ])
    .then(() => {
      console.log(Registery.address)
    })

  // Connect contracts

  // const registery = await Registery.deployed()
  // // Set contracts in registery
  // registery.register('KYCRegistery', KYCRegistery.address)
  // registery.register('Faucet', Faucet.address)
  // registery.register('NeufundICO', NeufundICO.address)
}
