pragma solidity ^0.4.8;


contract Proposition {

  modifier only_delegates() {
    _;
  }

  function delegateVote() only_delegates();
}
