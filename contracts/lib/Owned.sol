pragma solidity ^0.4.8;

import "../lib/RentrancyGuard.sol";
import "../lib/ERC20BasicInterface.sol";

contract Owned is RentrancyGuard {

  address public owner;



  function Owned() {
    owner = msg.sender;
  }

  modifier owner_only() {
    if (msg.sender == owner) {
      _;
    }
  }

  // TODO: Solidity 0.4.10 will have this as a build-in
  function assert(bool cond) {
    if(!cond) throw;
  }

  function transfer_ownership(address new_owner) external owner_only {
    address old_owner = owner;
    owner = new_owner;
    Transfered(old_owner, new_owner);
  }
  event Transfered(address old_owner, address new_owner);

  function terminate(ERC20BasicInterface[] tokens) external owner_only non_rentrant {
    // Transfer tokens to owner (TODO: error handling)
    for(uint i = 0; i < tokens.length; i++) {
      uint256 balance = tokens[i].balanceOf(this);
      tokens[i].transfer(owner, balance);
    }

    // Transfer Eth to owner and terminate contract
    selfdestruct(owner);
  }
}
