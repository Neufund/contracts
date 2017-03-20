pragma solidity ^0.4.8;

contract WatchdogInterface {
  function is_watched(address wallet) returns (bool);

  // Global Whitelisting of TXs matching patterns and Token Transactions

  function is_white_listed(address _to, uint _value, bytes _data)
    returns (bool);
  // Note: this function can be potentially price?
}
