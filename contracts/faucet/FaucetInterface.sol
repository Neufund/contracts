pragma solidity ^0.4.8;

import "../lib/Owned.sol";
//    F A U C E T   S E R V I C E

// Smart contract to keep accounts funded with enough eth to pay for transactions
contract FaucetInterface {

  // Contract state
  // * Contract owner / manager = PlatformGovernance(address)
  // * Pool minimum
  // * minimum balance on accounts
  // * target balance on accounts
  // * daily limit for accounts
  // * list of fauceted accounts
  // * State required to enforce daily limits

  // setters for all contract parameters and functions for contract lifecycle

  // If account balance at address is below min_balance, fill it up to target balance,
  // not exceeding the daily limit.
  function faucet(address addr);

  event Funded(address addr, uint256 old_balance, uint256 amount); // An account has been funded
  event AccountLimited(address addr, uint256 limit); // Account has reached
  event Pool_low(uint256 funds);  // The pool is running low and needs to be refunded
}
