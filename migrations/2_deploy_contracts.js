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

  console.log('Linking contracts')
  await Promise.all([
    faucetManager.multiplex_target(faucet.address),
    faucetManager.multiplex_add(neukeyNotary.address),
    faucet.set_manager(faucetManager.address),
    neukeyNotary.set_faucet(faucetManager.address)
  ])

  console.log('Linking roles')
  await Promise.all([
    faucetManager.multiplex_add(faucetAdmin),
    kyc.set_validator(kycValidator),
    neukeyNotary.set_notary(notary),
    ethEurTrader.set_trader(trader),
    euroToken.set_deposit_manager(depositManager)
  ])

  console.log('Registring notary on the faucet')
  await faucetRelay.register(notary)

  console.log('registring contracts in the Registry')
  await Promise.all([
    registery.register('Faucet', faucet.address),
    registery.register('KYCRegistery', KYCRegistery.address),
    registery.register('NeukeyNotary', NeukeyNotary.address),
    registery.register('EuroToken', EuroToken.address),
    registery.register('EthEurTrader', EthEurTrader.address),
    registery.register('Neumark', Neumark.address),
    registery.register('NeufundICO', ico.address)
  ])
}
