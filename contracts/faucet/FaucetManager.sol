pragma solidity ^0.4.8;

import "../lib/Multiplexer.sol";
import "./Faucet.sol";

contract FaucetManager is Multiplexer {

  function FaucetManager(address faucet, address[] managers)
    Multiplexer(faucet, managers)
  {
  }
}
