pragma solidity ^0.4.8;

import "./FaucetInterface.sol";
import "../lib/Owned.sol";
//    F A U C E T   S E R V I C E

// Smart contract to keep accounts funded with enough eth to pay for transactions
contract Faucet is FaucetInterface, Owned {

  uint pool_minimum;
  uint public daily_limit;
  uint public minimum_balance;
  uint public target_balance;

  mapping (address => bool) accounts;
  mapping (address => uint) daily_usage;

  modifier accounts_only() {
    if(accounts[msg.sender]) {
      _;
    }
  }

  function Faucet() payable {

    Pool_funded(this.balance, msg.value);
  }

  function () external payable {
    Pool_funded(this.balance, msg.value);
  }

  // setters for all contract parameters and functions for contract lifecycle

  // If account balance at address is below min_balance, fill it up to target balance,
  // not exceeding the daily limit.
  function withdraw() accounts_only() external non_rentrant
  {
    assert(minimum_balance < target_balance);
    if(msg.sender.balance < minimum_balance) {
      // TODO: Enforce daily limits
      uint256 transfer = target_balance - msg.sender.balance;

      // TODO Solidity 0.4.10: msg.sender.transfer(transfer);
      if(!msg.sender.send(transfer)) {
        throw;
      }

      Withdrawal(msg.sender, transfer);
      if(this.balance < pool_minimum) {
        Pool_low(this.balance, pool_minimum);
      }
    }
  }

  event Pool_funded(uint256 balance, uint256 amount);  // The pool is running low and needs to be refunded
  event Pool_low(uint256 balance, uint256 minimum);  // The pool is running low and needs to be refunded
}
