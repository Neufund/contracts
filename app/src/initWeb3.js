import {default as Web3} from 'web3';
import web3Polyfill from 'web3-polyfill';

var initWeb3 = function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 === 'undefined') {
        console.warn("No web3 detected. Using infura.");
        const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';

        let LedgerWalletProvider = require('ledger-wallet-provider');
        let HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
        let walletSubProvider = new LedgerWalletProvider();
        let hookedWalletSubprovider = new HookedWalletSubprovider(walletSubProvider);
        window.walletSubProvider = walletSubProvider;
        web3Polyfill(window)(NODE_URL, hookedWalletSubprovider);
    }
    return window.web3;
};

export default initWeb3();