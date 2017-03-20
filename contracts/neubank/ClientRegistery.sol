
contract EuroTokenClients is EuroTokensClientsInterface {
  // Contract ownership and lifecycle stuff
  owner = …address… // only owner can change

  mapping (address => bool) clients;

  function is_client(address) returns (bool);
}
