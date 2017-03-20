pragma solidity ^0.4.9;

contract LimitedPartnerAgreement {

  string contractUrl;
  bytes32 contractHash;

  mapping (address => bool) signatories;

  // Tracks which users have formally signed the LPA

  function sign();

  function hasSigned(address signer) returns (bool);
}
