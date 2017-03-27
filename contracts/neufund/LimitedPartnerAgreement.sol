pragma solidity ^0.4.8;

contract LimitedPartnerAgreement {

  string public contractUrl;
  bytes32 public contractHash;
  mapping (address => bool) signatories;

  // Tracks which users have formally signed the LPA

  function sign() {
    signatories[msg.sender] = true;
  }

  function hasSigned(address signer) returns (bool) {
    return signatories[signer];
  }
}
