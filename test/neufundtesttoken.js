var Promise = require("promise");
var NeufundCrowdsaleToken = artifacts.require("./NeufundCrowdsaleToken.sol");
var Web3 = require('web3');
var TestRPC = require("ethereumjs-testrpc");

var toPromise = function (f, args) {
    return new Promise((resolve, reject)=> {
        var cb = function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        };
        if (Array.isArray(args)) {
            f(...args, cb);
        } else {
            f(args, cb);
        }
    });
};

contract('NeufundCrowdsaleToken', function (accounts) {
    it("should put 0 NeufundCrowdsaleToken in the first account", function () {
        return NeufundCrowdsaleToken.deployed().then(function (instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function (balance) {
            assert.equal(balance.valueOf(), 0, "0 wasn't in the first account");
        });
    });
    it("should send coin correctly", function () {
        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

        var ntt;
        var value = 100;

        return NeufundCrowdsaleToken.deployed().then(function (instance) {
            ntt = instance;
            return toPromise(web3.eth.sendTransaction, {
                from: accounts[0],
                value,
                to: ntt.address
            })
        }).then(function () {
            return Promise.all([ntt.balanceOf(accounts[0]), ntt.getPrice()]);
        }).then(function (values) {
            var [balance, price] = values.map((v)=>v.valueOf());
            assert.equal(balance, 100 * price, `Should get ${value} * ${price} tokens`);
        })
    });
});
