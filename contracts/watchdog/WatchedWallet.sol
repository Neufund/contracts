pragma solidity ^0.4.9;

import "../lib/Owned.sol";
import "./Watchdog.sol";

//    W A T C H D O G   S E R V I C E

contract WatchedWallet is Owned {

  function WatchedWallet(address owner, address watchdog) {
  }

  WatchDog watchdog;
  uint min_delay;
  uint max_delay;

  // Owner direct interface
  function execute(address _to, uint _value, bytes _data)
    owner_only returns (bytes32 _id);
  function cancel(bytes32 _id) owner_only();
  event TransactionQueued(address _to, uint _value, bytes _data, bytes32 _id);
  event TransactionCancelled();

  // TODO: execute_white_listed that will query watchdog.is_white_listed.

  // Watchdog direct interface
  function block(bytes32 _id) watchdog_only returns (bool _success);
  function unblock(bytes32 _id) watchdog_only returns (bool _success);

  event TransactionBlocked();
  event TransactionUnblocked();
  // TODO: Does modifying the whitelist involve a delay and confirmation from owner, watchdog or both?

  modifier owner_delayed() {
    // TODO only owner can do, but still needs to be delayed.
  }

  // Owner indirect interface (these go through delay process)
  function transferOwnership(address) owner_delayed();
  function kill() owner_delayed();
  function setWatchDog(address) owner_delayed();
  function setDelays(min_delay, max_delay) owner_delayed();

  // Incentivized trigger
  function trigger(bytes32 _id);
  // TODO: This can also be done using http://docs.ethereum-alarm-clock.com/en/latest
}
