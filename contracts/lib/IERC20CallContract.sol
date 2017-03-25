pragma solidity ^0.4.8;

contract IERC20CallContract {
  function receiveApproval(
    address _from, uint256 _value, address _tokenContract, bytes _extraData);
}
