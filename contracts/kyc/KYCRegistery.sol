pragma solidity ^0.4.8;

import "./IKYCRegistery.sol";
import "../lib/Owned.sol";

// @title Know Your Customer registery
// @author Remco Bloemen <remco@neufund.org>
contract KYCRegistery is IKYCRegistery, Owned {

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

  function client_address() private constant returns (address)
  {
    return tx.origin;
  }

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

  function state_of(address client) public constant returns (State) {
    return submissions[client].state;
  }

  function hash_of(address client) public constant returns (bytes32) {
    return submissions[client].hash;
  }

  function is_kyced(address client) public constant returns (bool) {
    return state_of(client) == State.Accepted;
  }

  // TODO: Look into becoming a uPort compatible provider as long as
  //       it doesn't lock our users in

  event Submitted(address client, bytes32 submission_hash);
}
