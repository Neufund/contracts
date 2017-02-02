pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NeufundTestToken.sol";

contract TestNeufundTestToken {

  function testInitialBalanceUsingDeployedContract() {
    uint initialSupplyInEther = 10000;
    NeufundTestToken ntt = NeufundTestToken(DeployedAddresses.NeufundTestToken());

    Assert.equal(ntt.balanceOf(tx.origin), initialSupplyInEther * 1 ether, "Owner should have 10000 NeufundTestToken initially");
  }

  function testInitialBalanceWithNewNeufundTestToken() {
    uint initialSupplyInEther = 10000;
    NeufundTestToken ntt = new NeufundTestToken(initialSupplyInEther);

    Assert.equal(ntt.balanceOf(tx.origin), initialSupplyInEther * 1 ether, "Owner should have 10000 NeufundTestToken initially");
  }

  function testTransferTokens() {
    uint initialSupplyInEther = 10000;
    NeufundTestToken ntt = new NeufundTestToken(initialSupplyInEther);
    address receiver = 0x42;
    uint transferValueInEther = 100;
    Assert.equal(ntt.balanceOf(receiver), 0, "Receiver should have an empty balance initially");
    ntt.transfer(receiver, transferValueInEther * 1 ether);
    Assert.equal(ntt.balanceOf(receiver), transferValueInEther * 1 ether, "Receiver should receive 100 tokens");
    Assert.equal(ntt.balanceOf(tx.origin), (initialSupplyInEther - transferValueInEther) * 1 ether, "Owner should lose 100 tokens");
  }

}
