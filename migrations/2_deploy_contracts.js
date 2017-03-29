/* global artifacts */
const Registery = artifacts.require('Registery')
const KYCRegistery = artifacts.require('KYCRegistery')
const Faucet = artifacts.require('Faucet')
const FaucetManager = artifacts.require('FaucetManager')
const Neumark = artifacts.require('Neumark')
const EuroToken = artifacts.require('EuroToken')
const EthEurTrader = artifacts.require('EthEurTrader')
const NeukeyNotary = artifacts.require('NeukeyNotary')
const LimitedPartnerAgreement = artifacts.require('LimitedPartnerAgreement')
const NeufundICO = artifacts.require('NeufundICO')

module.exports = async (deployer, network, accounts) => {
  // Utility function that wraps deployer.deploy,
  // but returns the singleton instance
  let deploy = async (Contract, ...args) => {
    await deployer.deploy(Contract, ...args)
    return await Contract.deployed()
  }

  // Roles
  let owner = accounts[0]
  let faucetAdmin = owner
  let kycValidator = owner
  let notary = owner
  let trader = owner
  let depositManager = owner

  // Log role assignment
  console.log('\nRole assignemnt:')
  console.log(' * owner: \t' + owner)
  console.log(' * faucetAdmin: \t' + faucetAdmin)
  console.log(' * kycValidator: \t' + kycValidator)
  console.log(' * notary: \t' + notary)
  console.log(' * trader: \t' + trader)
  console.log(' * depositManager: \t' + depositManager)
  console.log('')

  // Deploy contracts
  let registery = await deploy(Registery)
  let faucet = await deploy(Faucet)
  let faucetManager = await deploy(FaucetManager)
  let kyc = await deploy(KYCRegistery)
  let neukeyNotary = await deploy(NeukeyNotary)
  let euroToken = await deploy(EuroToken)
  let ethEurTrader = await deploy(EthEurTrader)
  let lpa = await deploy(LimitedPartnerAgreement)
  let neumark = await deploy(Neumark)
  let ico = await deploy(
    NeufundICO,
    kyc.address,
    lpa.address,
    euroToken.address,
    neumark.address
  )

  // facuetManger is a relay contract relaying Faucet; do a typecast
  let faucetRelay = Faucet.at(faucetManager.address)

  // Link contracts
  await faucetManager.multiplex_target(faucet.address)
  await faucetManager.multiplex_add(neukeyNotary.address)
  await faucet.set_manager(faucetManager.address)
  await neukeyNotary.set_faucet(faucetManager.address)

  // Link roles
  await faucetManager.multiplex_add(faucetAdmin)
  await kyc.set_validator(kycValidator)
  await neukeyNotary.set_notary(notary)
  await ethEurTrader.set_trader(trader)
  await euroToken.set_deposit_manager(depositManager)

  // Notary is on the faucet
  await faucetRelay.register(notary)

  // Register
  await registery.register('Faucet', faucet.address)
  await registery.register('KYCRegistery', KYCRegistery.address)
  await registery.register('NeukeyNotary', NeukeyNotary.address)
  await registery.register('EuroToken', EuroToken.address)
  await registery.register('EthEurTrader', EthEurTrader.address)
  await registery.register('Neumark', Neumark.address)
  await registery.register('NeufundICO', ico.address)
}
