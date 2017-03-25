pragma solidity ^0.4.8;

/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 */
contract IERC20Basic {
  function balanceOf(address who) constant public returns (uint);
  function transfer(address to, uint value) public returns (bool ok);
  event Transfer(address indexed from, address indexed to, uint value);
}
