
//    W A T C H D O G   S E R V I C E

contract WatchedWallet {

  constructor WatchedWallet(address owner, address watchdog) {
  }

  address owner = …client pubkey…
  address watchdog = WatchDog(address)
  uint min_delay
  uint max_delay

  // Owner direct interface
  execute(address _to, uint _value, bytes _data) returns (bytes32 _id) owner_only
  cancel(bytes32 _id) owner_only
  event TransactionQueued(address _to, uint _value, bytes _data, bytes32 _id);
  event TransactionCancelled(…)

  // TODO: execute_white_listed that will query watchdog.is_white_listed.

  // Watchdog direct interface
  block(bytes32 _id) returns (bool _success) watchdog_only
  unblock(bytes32 _id) returns (bool _success) watchdog_only

  event TransactionBlocked(…)
  event TransactionUnblocked(…)
  // TODO: Does modifying the whitelist involve a delay and confirmation from owner, watchdog or both?

  // Owner indirect interface (these go through delay process)
  transferOwnership(address) owner_delayed
  kill() owner_delayed
  setWatchDog(address) owner_delayed
  setDelays(min_delay, max_delay) owner_delayed

  // Incentivized trigger
  trigger(bytes32 _id)
  // TODO: This can also be done using http://docs.ethereum-alarm-clock.com/en/latest
}
