pragma solidity ^0.4.8;

contract KYCRegisteryInterface {

  enum State {
    None, // = 0  (default value for non-existant keys)
    Submitted,
    Rejected,
    Accepted
  }

  function my_state() public returns (State);

  function is_kyced() public returns (bool);

  event StateChanged(address client, State new_state);
}
