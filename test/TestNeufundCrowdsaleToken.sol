pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NeufundCrowdsaleToken.sol";

contract TestNeufundCrowdsaleToken {

  function testInitialBalanceUsingDeployedContract() {
    NeufundCrowdsaleToken nct = NeufundCrowdsaleToken(DeployedAddresses.NeufundCrowdsaleToken());

    Assert.equal(nct.balanceOf(tx.origin), 0, "Owner should have 0 NeufundCrowdsaleToken initially");
  }

  function testInitialBalanceWithNewNeufundCrowdsaleToken() {
    NeufundCrowdsaleToken nct = new NeufundCrowdsaleToken();

    Assert.equal(nct.balanceOf(this), 0, "Owner should have 0 NeufundCrowdsaleToken initially");
  }

}
