import { default as Web3 } from 'web3'
import web3Polyfill from 'web3-polyfill'

var initWeb3 = function () {
  // Dev mode, inject testrpc
  if (process.env.NODE_ENV !== 'production') {
    console.log('[DEV] Using http://localhost:8545 as web3 provider.')
    return (window.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545')
    ))
  }

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 === 'undefined') {
    console.warn('No web3 detected. Using infura.')
    const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l'

    let LedgerWalletProviderFactory = require('ledger-wallet-provider').default
    let hookedWalletSubprovider = LedgerWalletProviderFactory()
    web3Polyfill(window)(NODE_URL, hookedWalletSubprovider)
  }
  return window.web3
}

export default initWeb3()
