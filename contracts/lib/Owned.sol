pragma solidity ^0.4.8;

import "../lib/ERC20Token.sol";

contract Owned {
  address public owner;

  // Disallow direct send
  // NOTE: Ether can still be send to this contract
  //       by `selfdestruct(contract_address)`!
  function() {
    throw;
  }

  function Owned() {
    owner = msg.sender;
  }

  bool rentrancy_lock = false;
  modifier non_rentrant() {
    if(rentrancy_lock == false) {
      rentrancy_lock = true;
      _;
      // Following requires at least Solidity 0.4.0!
      // (Otherwise return in function will skip this step)
      rentrancy_lock = false;
    }
  }

  modifier owner_only() {
    if (msg.sender == owner) {
      _;
    }
  }

  function transfer_ownership(address new_owner) owner_only {
    address old_owner = owner;
    owner = new_owner;
    Transfered(old_owner, new_owner);
  }
  event Transfered(address old_owner, address new_owner);

  function terminate(address[] tokens) owner_only non_rentrant {
    // Transfer tokens to owner (TODO: error handling)
    for(uint i = 0; i < tokens.length; i++) {
      ERC20Token token = ERC20Token(tokens[i]);
      uint256 balance = token.balanceOf(this);
      token.transfer(owner, balance);
    }

    // Transfer Eth to owner and terminate contract
    selfdestruct(owner);
  }
}
