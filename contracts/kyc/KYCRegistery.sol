pragma solidity ^0.4.8;

import "./KYCRegisteryInterface.sol";
import "../lib/Owned.sol";

// @title Know Your Customer registery
// @author Remco Bloemen <remco@neufund.org>
contract KYCRegistery is KYCRegisteryInterface, Owned {

  struct Submission {
    State state;
    bytes32 hash;
  }

  // API access accounts (only owners can change)
  address internal validator; // = …some pubkey…; // only owner can change
  mapping (address => Submission) internal submissions;

  modifier validator_only() {
    if(msg.sender == validator) {
      _;
    }
  }

  function set_validator(address new_validator) external owner_only {
    validator = new_validator;
  }

  function client_address() internal returns (address) {
    // TODO msg.sender or tx.origin ?
    return tx.origin;
  }

  // TODO: make payable to accept bribes ;)
  function submit(bytes32 submission_hash) external {
    address client = client_address();
    if(submissions[client].state == State.None ||
       submissions[client].state == State.Rejected)
    {
      submissions[client].state = State.Submitted;
      submissions[client].hash = submission_hash;
      Submitted(client, submission_hash);
      StateChanged(client, State.Submitted);
    }
  }

  function accept(address client) external validator_only() {
    if(submissions[client].state == State.Submitted) {
      submissions[client].state = State.Accepted;
      StateChanged(client, State.Accepted);
    }
  }

  function reject(address client) external validator_only() {
    if(submissions[client].state == State.Submitted) {
      submissions[client].state = State.Rejected;
      StateChanged(client, State.Rejected);
    }
  }

  function revoke(address client) external owner_only() {
    delete submissions[client];
    StateChanged(client, State.None);
  }

  function my_state() public returns (State) {
    return submissions[client_address()].state;
  }

  function is_kyced() public returns (bool) {
    return my_state() == State.Accepted;
  }

  // TODO: Look into becoming a uPort compatible provider as long as
  //       it doesn't lock our users in

  event Submitted(address client, bytes32 submission_hash);
  event Accepted(address client);
  event Rejected(address client);
}
