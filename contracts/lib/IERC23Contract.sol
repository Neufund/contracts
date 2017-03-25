pragma solidity ^0.4.8;

/*
 * ERC23 interface
 * see https://github.com/ethereum/EIPs/issues/223
 */
contract IERC23Contract {
  function tokenFallback(address from, uint value, bytes data) public;
}
