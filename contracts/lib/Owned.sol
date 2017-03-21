pragma solidity ^0.4.8;

import "../lib/RentrancyGuard.sol";
import "../lib/ERC20Token.sol";

contract Owned is RentrancyGuard {

  address public owner;

  // Disallow direct send by default (but allow override to accept)
  // NOTE: Ether can still be send to this contract
  //       by `selfdestruct(contract_address)` or mining
  //       directly to the contract address!
  function() external payable {
    throw;
  }

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

  function terminate(address[] tokens) external owner_only non_rentrant {
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
