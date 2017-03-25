pragma solidity ^0.4.8;

contract IERC20CallToken {
  function approveAndCall(address _spender, uint256 _value, bytes _extraData)
    returns (bool success);
}
