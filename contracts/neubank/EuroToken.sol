pragma solidity ^0.4.9;


import "../lib/Owned.sol";
import "../lib/ERC20Token.sol";
import "./ClientRegisteryInterface.sol";

// NeuMark are created during ICO in exchange for EURT
contract EuroToken is Owned, ERC20Token {

  // TODO: Is 'Owned' the propper class?

  // API access account
  address deposit_manager; // only owner can change
  function set_deposit_manager(address addr) owner_only() {
    deposit_manager = addr;
  }

  modifier deposit_manager_only() {
    if(msg.sender == deposit_manager) {
      _;
    }
  }

  // Contract with client list
  ClientRegisteryInterface clients; // only owner can change
  function set_clients_manager(address addr) owner_only() {
    clients = ClientRegisteryInterface(addr);
  }

  modifier client_only() {
    if(clients.is_client(msg.sender)) {
      _;
    }
  }

  // Euro tokens are minted when classical EUR is received
  function deposit(address client, uint256 client) deposit_manager_only {
    Transfer();


  }
  // Issues a Transfer event with zero sender

  // Known clients can withdraw their EURT and receive EUR on their account
  function withdraw(uint256 amount) client_only();
  // TODO: Charge fees here in the interest of transparency? Problem: transfer fees might differ for each client.
  // Issues a Transfer event with zero receiver

  // TODO: Some lost their keys, sad, and now demands their euros to be transferred. What?

  // Standard ERC20
  function totalSupply() constant returns (uint256 totalSupply);
  function balanceOf(address _owner) constant returns (uint256 balance);
  function transfer(address _to, uint256 _value) returns (bool success);
  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  // from == 0: deposit
  // to == 0: withdraw

  // Advanced ERC20
  function transferFrom(address _from, address _to, uint256 _value)
    returns (bool success);
  function approve(address _spender, uint256 _value) returns (bool success);
  function allowance(address _owner, address _spender)
    constant returns (uint256 remaining);
  event Approval(address indexed _owner,
    address indexed _spender, uint256 _value);

  // ERC22 metadata
  string symbol = "NEURT";
  string name = "Neu Euro-Token";
  uint decimals = 18; // [a€] [attoEuro]  Leaves 59 digits before the comma (enough to buy trillions of milky-ways made of gold).
}
