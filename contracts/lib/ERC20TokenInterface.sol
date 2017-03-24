pragma solidity ^0.4.8;

import "./ERC20BasicInterface.sol";

/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20TokenInterface is ERC20BasicInterface {
  function totalSupply() constant public returns (uint256);
  function allowance(address owner, address spender) constant returns (uint);
  function transferFrom(address from, address to, uint value) returns (bool ok);
  function approve(address spender, uint value) returns (bool ok);
  event Approval(address indexed owner, address indexed spender, uint value);
}
