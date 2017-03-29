pragma solidity ^0.4.8;

// Smart contract to keep accounts funded with enough
// eth to pay for transactions
contract IFaucet {

  function minimum_balance() constant public returns (uint256);

  // Check my balance and top up if allowed
  function withdraw() external;

  // An account has been funded
  event Withdrawal(address indexed addr,  uint256 amount);

  // Account has reached daily limit
  event AccountLimited(address indexed addr, uint256 limit);
}
