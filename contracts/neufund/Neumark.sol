pragma solidity ^0.4.8;


import "../lib/Owned.sol";
import "../lib/BaseToken.sol";

//   N E U   M A R K

contract Neumark is Owned, BaseToken("NMK", "Neumark", 59) {

  // API access account
  address deposit_manager; // only owner can change
}
