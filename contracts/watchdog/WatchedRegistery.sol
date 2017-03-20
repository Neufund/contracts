pragma solidity ^0.4.9;


import "./WatchedWallet.sol";

contract WatchedFactory {

  mapping(address => bool) is_watched;
  WatchedWallet[] watched;

}
