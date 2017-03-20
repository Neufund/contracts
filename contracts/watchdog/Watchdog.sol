
contract WatchDog is Proxy {

  owner = PlatformGovernance(address)

  whitelist = WatchdogWhitelistInterface(address)

  operator = …pubkey…; // API account


  // Factory
  mapping (address => bool) watched;

  event Created(addres owner, address wallet);

  function create(address wallet_owner) owner_only returns (address) {
    var contract = new WatchedWallet(wallet_owner, this);
    watched[contract] = true;
    Created(wallet_owner, contract);
    return contract;
  }

  function is_watched(address watched) returns (bool) {
    return watched[contract];
  }

  // Watch
  function block(address wallet, bytes32 tx_id) operator_only;
  function unblock(address wallet, bytes32 tx_id) operator_only;

  // Global Whitelisting of TXs matching patterns and Token Transactions

  function is_white_listed(address _to, uint _value, bytes _data) returns (bool);
  // Note: this function can be potentially price?
}
