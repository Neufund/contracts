pragma solidity ^0.4.8;

import "../lib/Owned.sol";

// This contract can be used when a smart contract has a
// role that can be fullfilled by one account, but you would
// like several accounts to fullfill the role.
contract Multiplexer is Owned {

  address private target;
  mapping (address => bool) private managers;

  modifier managers_only() {
    if(managers[msg.sender]) {
      _;
    }
  }

  function Multiplexer(address target_, address[] managers_) {
    target = target;
    for(uint i = 0; i < managers_.length; i++) {
      managers[managers_[i]] = true;
    }
  }

  // Proxy/relay the target contract
  function () external payable managers_only {
    if(!target.call.value(msg.value)(msg.data)) {
      throw;
    }
  }

  function multiplex_target(address target_) external owner_only {
    target = target_;
  }

  function multiplex_add(address manager) external owner_only {
    managers[manager] = true;
  }

  function multiplex_remove(address manager) external owner_only {
    delete managers[manager];
  }
}
