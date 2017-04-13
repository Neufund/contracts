pragma solidity ^0.4.8;

import "../lib/Owned.sol";
import "./IClientRegistery.sol";

contract ClientRegistery is Owned, IClientRegistery {

  mapping (address => bool) internal clients;

  function isClient(address client) external constant returns (bool) {
      return clients[client];
  }

  function addClient(address client) external owner_only {
      clients[client] = true;
      ClientAdded(client);
  }

  function removeClient(address client) external owner_only {
      delete clients[client];
      ClientRemoved(client);
  }

  event ClientAdded(address client);
  event ClientRemoved(address client);
}
