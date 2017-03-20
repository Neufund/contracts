
contract LimitedPartnerContract {

  string contractUrl   = …;
  bytes32 contractHash = …;

  mapping (address => bool) signatories;

  // Tracks which users have formally signed the LPA

  function sign();

  function hasSigned(address signer) returns (bool);
}
