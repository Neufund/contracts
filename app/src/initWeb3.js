import { default as Web3 } from 'web3'
import web3Polyfill from 'web3-polyfill'

var initWeb3 = function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 === 'undefined') {
    console.warn('No web3 detected. Using infura.')
    const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l'

    console.log('Hello!')
    let LedgerWalletProviderFactory = require('ledger-wallet-provider').default
    console.log('Hello!')
    let hookedWalletSubprovider = LedgerWalletProviderFactory()
    console.log(hookedWalletSubprovider)

    hookedWalletSubprovider.setEngine = engine => {
      console.log(engine)
    }
    hookedWalletSubprovider.handleRequest = (payload, next, end) => {
      console.log(payload, next, end)
    }
    console.log(hookedWalletSubprovider)

    console.log('Hello!')
    web3Polyfill(window)(NODE_URL, hookedWalletSubprovider)
    console.log('Hello!')
  }
  return window.web3
}

export default initWeb3()
