var NeufundCrowdsaleToken = artifacts.require("./NeufundCrowdsaleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(NeufundCrowdsaleToken);
};
