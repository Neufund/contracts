pragma solidity ^0.4.8;

import "./lib/Owned.sol";

contract Registery is Owned {

  mapping (string => address) registery;

  function register(string name, address addr) external owner_only() {
    registery[name] = addr;
  }

  function remove(string name) external owner_only() {
    delete registery[name];
  }

  function lookup(string name) external returns (address) {
    return registery[name];
  }

}
