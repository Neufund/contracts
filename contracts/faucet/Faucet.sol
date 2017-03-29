pragma solidity ^0.4.8;

import "./IFaucet.sol";
import "../lib/Owned.sol";
import "../lib/SafeMath.sol";

// Smart contract to keep accounts funded
// with enough eth to pay for transactions
contract Faucet is IFaucet, Owned, SafeMath {

  // TODO: Enforce daily limits

  uint256 pool_minimum = 10 ether;
  uint256 public minimum_balance = 10 finney;
  uint256 public target_balance = 100 finney;
  address manager;
  mapping (address => bool) accounts;
  mapping (address => uint) daily_usage;

  modifier accounts_only() {
    if(accounts[msg.sender]) {
      _;
    }
  }

  modifier manager_only() {
    if(msg.sender == manager) {
      _;
    }
  }

  function Faucet(
    address manager_
  ) payable {
    manager = manager_;
    assert(minimum_balance < target_balance);
    Pool_funded(this.balance, msg.value);
  }

  function set_manager(address new_manager) external owner_only {
    manager = new_manager;
  }

  function set_parameters(
    uint256 pool_minimum_,
    uint256 minimum_balance_,
    uint256 target_balance_
  ) external owner_only {
    pool_minimum = pool_minimum_;
    minimum_balance = minimum_balance_;
    target_balance = target_balance_;
  }

  function register(address account) external manager_only {
    accounts[account] = true;
    withdraw_for(account);
  }

  function unregister(address account) external manager_only {
    delete accounts[account];
  }

  function () external payable {
    Pool_funded(this.balance, msg.value);
  }

  // If account balance at address is below min_balance,
  // fill it up to target balance,
  // not exceeding the daily limit.
  function withdraw_for(address account) internal {
    assert(accounts[account]);
    if(account.balance < minimum_balance) {
      uint256 transfer = safeSub(target_balance, account.balance);
      uint256 new_balance = safeSub(this.balance, transfer);
      Withdrawal(account, transfer);
      if(new_balance < pool_minimum) {
        Pool_low(this.balance, pool_minimum);
      }

      // This call is safe because of 2300 send gas limit
      // Additionally, it is a tail call
      // TODO Solidity 0.4.10: account.transfer(transfer);
      if(!account.send(transfer)) {
        throw;
      }
    }
  }

  // Allow accounts to top themselves up
  function withdraw() accounts_only external {
    withdraw_for(msg.sender);
  }

  event Pool_funded(uint256 balance, uint256 amount);  // The pool is running low and needs to be refunded
  event Pool_low(uint256 balance, uint256 minimum);  // The pool is running low and needs to be refunded
}
