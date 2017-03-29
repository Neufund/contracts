pragma solidity ^0.4.8;

import "../lib/Owned.sol";
import "../faucet/Faucet.sol";

contract NeukeyNotary is Owned {

  struct deviceInfo {
    uint32 device_id;
    address pub_key;
    uint32 owner; //
  }

  address private notary;
  Faucet private faucet;
  mapping (address => bool) deprecated;
  mapping (address => uint) registery;

  modifier notary_only() {
    if(msg.sender == notary) {
      _;
    }
  }

  function set_faucet(Faucet faucet_) external owner_only {
    faucet = faucet_;
  }

  function set_notary(address notary_) external owner_only {
    notary = notary_;
  }

  function register(address nanoPubKey, uint32 device_id)
    external notary_only
  {
  }

  function send_to_owner(address nanoPubKey, uint device_id, uint32 owner_id)
    external notary_only
  {
    faucet.register(nanoPubKey);
  }

  function deprecate(address nanoPubKey)
    external notary_only
  {
    faucet.unregister(nanoPubKey);
  }

  function is_registered(address) constant external returns (bool)
  {

  }

  function device_id(address) constant external returns (uint32)
  {

  }

  event DeviceRegistered(address nanoPubKey, uint device_id);
  event DeviceSend(address nanoPubKey, uint device_id);

  // TODO: An enabled device is ellegible for the Faucet contract
}
