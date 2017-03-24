pragma solidity ^0.4.8;

import "./ERC20BasicInterface.sol";

/*
 * ERC23 interface
 * see https://github.com/ethereum/EIPs/issues/223
 */
contract ERC23TokenInterface is ERC20BasicInterface {
  function transfer(address to, uint value, bytes data)
    public returns (bool success);
}
