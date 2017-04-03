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
  let contracts = [
    Registery,
    Faucet,
    FaucetManager,
    KYCRegistery,
    NeukeyNotary,
    EuroToken,
    EthEurTrader,
    LimitedPartnerAgreement,
    Neumark,
    [NeufundICO,
      KYCRegistery.address,
      LimitedPartnerAgreement.address,
      EuroToken.address,
      Neumark.address]]
  await deployer.deploy(contracts)

  let registery = await Registery.deployed()
  let faucet = await Faucet.deployed()
  let faucetManager = await FaucetManager.deployed()
  let kyc = await KYCRegistery.deployed()
  let neukeyNotary = await NeukeyNotary.deployed()
  let euroToken = await EuroToken.deployed()
  let ethEurTrader = await EthEurTrader.deployed()
  let ico = await NeufundICO.deployed()

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
