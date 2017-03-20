pragma solidity ^0.4.9;

import "../lib/Owned.sol";
import "./WhitelistInterface.sol";
import "./WatchedWallet.sol";

contract Proxy {
  // TODO factor out
}


contract WatchDog is Owned, Proxy {
  WhitelistInterface whitelist;
  address operator; // API account

  modifier operator_only() {
    if(msg.sender == operator) {
      _;
    }
  }

  // Factory
  mapping (address => bool) watched;

  event Created(address owner, address wallet);

  function create(address wallet_owner) owner_only returns (address) {
    // WatchedWallet wallet = new WatchedWallet(wallet_owner, this);
    // watched[wallet] = true;
    // Created(wallet_owner, wallet);
    // return wallet;
  }

  function is_watched(address wallet) returns (bool) {
    return watched[wallet];
  }

  // Watch
  function block(address wallet, bytes32 tx_id) operator_only();
  function unblock(address wallet, bytes32 tx_id) operator_only();

  // Global Whitelisting of TXs matching patterns and Token Transactions

  function is_white_listed(address _to, uint _value, bytes _data) returns (bool);
  // Note: this function can be potentially price?
}
