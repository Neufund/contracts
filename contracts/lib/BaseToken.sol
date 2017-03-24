pragma solidity ^0.4.8;

import "./ERC20TokenInterface.sol";
import "./ERC22TokenInterface.sol";
import "./ERC23TokenInterface.sol";
import "./ERC23ContractInterface.sol";
import "../lib/SafeMath.sol";

contract BaseToken is
  ERC20TokenInterface,
  ERC22TokenInterface,
  ERC23TokenInterface,
  SafeMath
{
  uint public totalSupply;
  string public symbol;
  string public name;
  uint256 public decimals;
  mapping (address => uint256) private balances;
  mapping (address => mapping (address => uint)) private allowed;

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
      ERC23ContractInterface(to)
        .tokenFallback(msg.sender, value, data);
    }
  }

  function balanceOf(address _owner)
    constant returns (uint balance)
  {
    return balances[_owner];
  }

  function transferInternal(address _from, address _to, uint _value)
    private
  {
    balances[_from] = safeSub(balances[_from], _value);
    balances[_to] = safeAdd(balances[_to], _value);
    Transfer(_from, _to, _value);
  }

  function transferFrom(address _from, address _to, uint _value)
    returns (bool success)
  {
    var _allowance = allowed[_from][msg.sender];

    // Check is not needed because safeSub(_allowance, _value) will already throw if this condition is not met
    // if (_value > _allowance) throw;

    transferInternal(_from, _to, _value);
    allowed[_from][msg.sender] = safeSub(_allowance, _value);
    notifyReceiver(_from, _to, _value, "");
    // NOTE: We use from and not msg.sender. allowances are
    //       about trading on-behalf-off.
    return true;
  }

  function approve(address _spender, uint _value)
    returns (bool success)
  {
    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  function allowance(address _owner, address _spender)
    constant returns (uint remaining)
  {
    return allowed[_owner][_spender];
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

  // Internal, for subclasses to use
  function mint(address to, uint value) internal {
    totalSupply = safeAdd(totalSupply, value);
    balances[to] = safeAdd(balances[to], value);
    notifyReceiver(0, to, value, "");
  }

  function burn(address from, uint value) internal {
    totalSupply = safeSub(totalSupply, value);
    balances[from] = safeSub(balances[from], value);
  }

  function BaseToken(string symbol_, string name_, uint256 decimals_) {
    symbol = symbol_;
    name = name_;
    decimals = decimals_;
  }
}
