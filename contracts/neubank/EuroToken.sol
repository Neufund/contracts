pragma solidity ^0.4.8;


import "../lib/Owned.sol";
import "../lib/BaseToken.sol";
import "./ClientRegisteryInterface.sol";

// NeuMark are created during ICO in exchange for EURT
// [a€] [attoEuro]  Leaves 59 digits before the comma
// (enough to buy trillions of milky-ways made of gold).
contract EuroToken is Owned, BaseToken("NEUR", "Neu Euro", 59) {

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
  function set_clients_manager(address addr) external owner_only() {
    clients = ClientRegisteryInterface(addr);
  }

  modifier client_only() {
    if(clients.is_client(msg.sender)) {
      _;
    }
  }

  // Euro tokens are minted when classical EUR is received
  function deposit(address client, uint256 amount) external deposit_manager_only {
    if(clients.is_client(client)) {
      mint(client, amount);
      Transfer(0, client, amount);
    } else {
      DepositRejected(client, amount);
    }
  }
  // Issues a Transfer event with zero sender

  // Known clients can withdraw their EURT and receive EUR on their account
  function withdraw(uint256 amount) external client_only {
    burn(msg.sender, amount);
    Transfer(msg.sender, 0, amount);
    Withdraw(msg.sender, amount);
  }
  // TODO: Charge fees here in the interest of transparency? Problem: transfer fees might differ for each client.
  // Issues a Transfer event with zero receiver

  event DepositRejected(address receiver, uint256 amount);
  event Withdraw(address client, uint256 amount);

  // TODO: Some lost their keys, sad, and now demands their euros to be transferred. What?
}
