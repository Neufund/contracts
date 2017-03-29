pragma solidity ^0.4.8;

import "./IERC20Basic.sol";
import "./IERC20Token.sol";
import "./IERC20CallToken.sol";
import "./IERC20CallContract.sol";
import "./IERC22Token.sol";
import "./IERC23Token.sol";
import "./IERC23Contract.sol";

contract IToken is
  IERC20Basic,
  IERC20Token,
  IERC20CallToken,
  IERC22Token,
  IERC23Token
{
}
