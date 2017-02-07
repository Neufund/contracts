import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import crowdsale_artifacts from '../../build/contracts/NeufundCrowdsaleToken.json'

// CrowdsaleToken is our usable abstraction, which we'll use through the code below.
var CrowdsaleToken = contract(crowdsale_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;

export default {
    start: function() {
        var self = this;

        // Bootstrap the CrowdsaleToken abstraction for Use.
        CrowdsaleToken.setProvider(web3.currentProvider);

        // Get the initial account balance so it can be displayed.
        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }

            accounts = accs;
            account = accounts[0];

            self.refreshBalance();
        });
    },

    setStatus: function(message) {
        var status = document.getElementById("status");
        status.innerHTML = message;
    },

    refreshBalance: function() {
        var self = this;

        var meta;
        CrowdsaleToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account, {from: account});
        }).then(function(value) {
            var balance_element = document.getElementById("balance");
            balance_element.innerHTML = value.valueOf();
        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error getting balance; see log.");
        });
    },

    sendCoin: function() {
        var self = this;

        var amount = parseInt(document.getElementById("amount").value);
        var receiver = document.getElementById("receiver").value;

        this.setStatus("Initiating transaction... (please wait)");

        var meta;
        CrowdsaleToken.deployed().then(function(instance) {
            meta = instance;
            return meta.sendCoin(receiver, amount, {from: account});
        }).then(function() {
            self.setStatus("Transaction complete!");
            self.refreshBalance();
        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error sending coin; see log.");
        });
    }
};