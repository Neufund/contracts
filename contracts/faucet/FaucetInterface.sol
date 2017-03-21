pragma solidity ^0.4.8;

// Smart contract to keep accounts funded with enough eth to pay for transactions
contract FaucetInterface {
  function withdraw() external;
  event Withdrawal(address addr,  uint256 amount); // An account has been funded
  event AccountLimited(address addr, uint256 limit); // Account has reached
}
