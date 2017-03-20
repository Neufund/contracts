pragma solidity ^0.4.8;


import "./WatchedWallet.sol";

contract WatchedFactory {

  mapping(address => bool) is_watched;
  WatchedWallet[] watched;

}
