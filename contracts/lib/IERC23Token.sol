pragma solidity ^0.4.8;

import "./IERC20Basic.sol";

/*
 * ERC23 interface
 * see https://github.com/ethereum/EIPs/issues/223
 */
contract IERC23Token is IERC20Basic {
  function transfer(address to, uint value, bytes data)
    public returns (bool success);
}
