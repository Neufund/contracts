pragma solidity ^0.4.8;

import "./IERC20Basic.sol";
import "./IERC20Token.sol";
import "./IERC20CallToken.sol";
import "./IERC20CallContract.sol";
import "./IERC22Token.sol";
import "./IERC23Token.sol";
import "./IERC23Contract.sol";
import "../lib/SafeMath.sol";

contract BaseToken is
  IERC20Basic,
  IERC20Token,
  IERC20CallToken,
  IERC22Token,
  IERC23Token,
  SafeMath
{
  uint256 private total;
  string private tokenSymbol;
  string private tokenName;
  uint256 private tokenDecimals;
  mapping (address => uint256) private balances;
  mapping (address => mapping (address => uint)) private allowed;

  function totalSupply() constant public returns (uint256) {
    return total;
  }

  function symbol() public constant returns (string) {
    return tokenSymbol;
  }

  function name() public constant returns (string) {
    return tokenName;
  }

  function decimals() public constant returns (uint256) {
    return tokenDecimals;
  }

  function isContract(address client)
    private constant returns (bool result)
  {
    assembly {
      result := not(iszero(extcodesize(client)))
    }
  }

  function notifyReceiver(
    address from, address to, uint value, bytes data) private
  {
    if(isContract(to)) {
      IERC23Contract(to)
        .tokenFallback(msg.sender, value, data);
    }
  }

  function balanceOf(address _owner)
    public constant returns (uint balance)
  {
    return balances[_owner];
  }

  function approve(address _spender, uint _value)
    public returns (bool success)
  {
    // TODO Race condition compare-and-swap ?
    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  function approveAndCall(address _spender, uint256 _value, bytes _data)
    public returns (bool success)
  {
    approve(_spender, _value);
    IERC20CallContract(_spender)
      .receiveApproval(msg.sender, _value, this, _data);
    return true;
  }

  function allowance(address _owner, address _spender)
    public constant returns (uint remaining)
  {
    return allowed[_owner][_spender];
  }

  function transferInternal(address _from, address _to, uint _value)
    private
  {
    assert(_to != 0x0);
    assert(_to != address(this));
    balances[_from] = safeSub(balances[_from], _value);
    balances[_to] = safeAdd(balances[_to], _value);
    Transfer(_from, _to, _value);
  }

  function transfer(address to, uint value)
    public returns (bool ok)
  {
    transferInternal(msg.sender, to, value);
    notifyReceiver(msg.sender, to, value, "");
  }

  function transfer(address to, uint value, bytes data)
    public returns (bool ok)
  {
    transferInternal(msg.sender, to, value);
    notifyReceiver(msg.sender, to, value, data);
  }

  function transferFrom(address _from, address _to, uint _value)
    public returns (bool success)
  {
    return transferFrom(_from, _to, _value, "");
  }

  function transferFrom(address _from, address _to, uint _value, bytes _data)
    public returns (bool success)
  {
    var _allowance = allowed[_from][msg.sender];
    transferInternal(_from, _to, _value);
    allowed[_from][msg.sender] = safeSub(_allowance, _value);
    notifyReceiver(_from, _to, _value, _data);
    return true;
  }

  // Internal, for subclasses to use
  function mint(address to, uint value) internal {
    assert(to != 0);
    total = safeAdd(total, value);
    balances[to] = safeAdd(balances[to], value);
    notifyReceiver(0, to, value, "");
  }

  function burn(address from, uint value) internal {
    total = safeSub(total, value);
    balances[from] = safeSub(balances[from], value);
  }

  function BaseToken(string symbol_, string name_, uint256 decimals_) {
    tokenSymbol = symbol_;
    tokenName = name_;
    tokenDecimals = decimals_;
  }
}
