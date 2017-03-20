pragma solidity ^0.4.8;


import "../lib/Owned.sol";

//   N E U   M A R K

contract NeuMark is Owned, ERC20Token {

  // API access account
  address deposit_manager; // only owner can change

  // Standard ERC20
  // TODO function totalSupply() constant returns (uint256 totalSupply);
  function balanceOf(address _owner) constant returns (uint256 balance);
  function transfer(address _to, uint256 _value) returns (bool success);

  // Advanced ERC20
  function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
  function approve(address _spender, uint256 _value) returns (bool success);
  function allowance(address _owner, address _spender) constant returns (uint256 remaining);

  // NOTE: Events are declared in ERC20Token, but should be called here

  // ERC22 metadata
  string symbol = "NMK";
  string name = "NeuMark";
  uint decimals = 2; // Reflect Euro-token
}
