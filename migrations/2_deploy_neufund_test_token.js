var NeufundTestToken = artifacts.require("./NeufundTestToken.sol");

module.exports = function(deployer) {
  deployer.deploy(NeufundTestToken);
};
