pragma solidity ^0.4.8;

/*
 * ERC22 interface
 * see https://github.com/ethereum/EIPs/issues/223
 */
contract ERC22TokenInterface {
  function symbol() public constant returns (string);
  function name() public constant returns (string);
  function decimals() public constant returns (uint256);
}
