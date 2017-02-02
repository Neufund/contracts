var NeufundTestToken = artifacts.require("./NeufundTestToken.sol");
var Web3 = require('web3');
var web3 = new Web3();

contract('NeufundTestToken', function(accounts) {
  it("should put 10000 NeufundTestToken in the first account", function() {
    return NeufundTestToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), Number(web3.toWei(10000, "ether")), "10000 wasn't in the first account");
    });
  });
  it("should send coin correctly", function() {
    var ntt;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return NeufundTestToken.deployed().then(function(instance) {
      ntt = instance;
      return ntt.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return ntt.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return ntt.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return ntt.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return ntt.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
