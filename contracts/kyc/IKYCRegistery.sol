pragma solidity ^0.4.8;

contract IKYCRegistery {

  enum State {
    None, // = 0  (default value for non-existant keys)
    Submitted,
    Rejected,
    Accepted
  }

  function state_of(address client) public constant returns (State);

  function is_kyced(address client) public constant returns (bool);

  event StateChanged(address client, State new_state);
}
