pragma solidity ^0.4.8;

contract Multisig {
  // TODO m-out-of-n
  // TODO less than m, more time pending
  // TODO veto power

  // TODO Fast acting emergency break?

  // TODO: For quick lookup of event:
  //mapping (bytes32 => block_id) txs;

  function execute(address _to, uint _value, bytes _data) returns (bytes32 _id);
  function confirm(bytes32 _id) returns (bool _success);
  // m-out-of-n

  // add / remove owners.

  // See: https://blog.gnosis.pm/release-of-new-multisig-wallet-59b6811f7edc#.15qbtimso
  // See: https://github.com/ConsenSys/MultiSigWallet

  event Transaction(address, uint256 value, bytes data);
}
