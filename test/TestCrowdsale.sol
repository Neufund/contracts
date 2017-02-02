pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NeufundTestToken.sol";
import "../contracts/Crowdsale.sol";

contract TestCrowdsale {

  function testCrowdsaleCreation() {
    Crowdsale crowdsale = new Crowdsale(0x42, 1, 1, 1, Token(0x00));
  }

}
