pragma solidity ^0.4.9;


contract Proposition {

  modifier only_delegates() {
    _;
  }

  function delegateVote() only_delegates();
}
