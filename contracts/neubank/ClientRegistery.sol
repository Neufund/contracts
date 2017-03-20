pragma solidity ^0.4.8;

import "../lib/Owned.sol";
import "./ClientRegisteryInterface.sol";

contract ClientRegistery is Owned, ClientRegisteryInterface {

  mapping (address => bool) clients;

  function is_client(address) returns (bool);
}
