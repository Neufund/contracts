pragma solidity ^0.4.9;

import "../lib/Owned.sol";

//    K Y C   S E R V I C E
contract KYCService is Owned {
  address owner; // = PlatformGovernance(address);

  // API access accounts (only owners can change)
  address validator; // = …some pubkey…; // only owner can change
  address revoker; // = …address…; // only owner can change

  modifier validator_only() {
    _; // TODO
  }

  modifier revoker_only() {
    _; // TODO
  }

  function approve(address) validator_only();
  function revoke(address) revoker_only();

  function kycCompleted(address) returns (bool);

  // TODO: Look into becoming a uPort compatible provider as long as
  //       it doesn't lock our users in
}
