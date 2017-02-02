pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NeufundTestToken.sol";

contract TestNeufundTestToken {

  function testInitialBalanceUsingDeployedContract() {
    uint initialSupply = 10000;
    NeufundTestToken ntt = NeufundTestToken(DeployedAddresses.NeufundTestToken());

    Assert.equal(ntt.balanceOf(tx.origin), initialSupply, "Owner should have 10000 NeufundTestToken initially");
  }

  function testInitialBalanceWithNewNeufundTestToken() {
    uint initialSupply = 10000;
    NeufundTestToken ntt = new NeufundTestToken(initialSupply);

    Assert.equal(ntt.balanceOf(tx.origin), initialSupply, "Owner should have 10000 NeufundTestToken initially");
  }

}
