import {default as Web3} from 'web3';
import web3Polyfill from 'web3-polyfill';

var initWeb3 = function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. " +
            "If using MetaMask, see the following link. Feel free to delete this warning. :) " +
            "http://truffleframework.com/tutorials/truffle-and-metamask");
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Using infura.");
        const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';

        let LedgerWalletProvider = require('ledger-wallet-provider');
        let HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
        let walletSubProvider = new LedgerWalletProvider();
        let hookedWalletSubprovider = new HookedWalletSubprovider(walletSubProvider);
        window.walletSubProvider = walletSubProvider;
        web3Polyfill(window)(NODE_URL, hookedWalletSubprovider);
    }
};

export default initWeb3;