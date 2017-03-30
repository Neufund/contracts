pragma solidity ^0.4.8;

import "./lib/Owned.sol";

contract Registery is Owned {

  mapping (string => address) registery;

  function register(string name, address addr) public owner_only {
    registery[name] = addr;
  }

  function remove(string name) public owner_only {
    delete registery[name];
  }

  function lookup(string name) constant public returns (address) {
    return registery[name];
  }

}
