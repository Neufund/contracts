pragma solidity ^0.4.8;

import "../lib/Owned.sol";

//    N A N O   P R O V I S I O N I N G
contract NeukeyNotary is Owned {

  // owner = PlatformGovernance(address)
  address notary;

  modifier notary_only() {
    if(msg.sender == notary) {
      _;
    }
  }

  mapping (address => bool) deprecated;
  mapping (address => uint) registery;

  struct deviceInfo {
    uint device_id;
    address pub_key;
    uint owner; //
  }

  function register(address nanoPubKey, uint device_id) notary_only();
  function send_to_owner(uint device_id, uint owner) notary_only();
  function deprecate(address nanoPubKey);

  event DeviceRegistered(address nanoPubKey, uint device_id);
  event DeviceSend(address nanoPubKey, uint device_id);

  function is_registered(address) returns (bool);
  function device_id(address) returns (uint);


  // TODO: An enabled device is ellegible for the Faucet contract
}
