const NeufundICO = artifacts.require("./NeufundICO.sol");

module.exports = function(deployer) {
  deployer.deploy([
    [NeufundICO]
  ]).then(()=>{
    console.log("NuefundICO deployed: " + NeufundICO.address)
  })
};
