
//   N E U   M A R K

contract NeuMark is ERC20Token {

  // Contract ownership and lifecycle stuff
  owner = NeuTokenGovernance(address)

  // API access account
  address deposit_manager = …some pubkey…; // only owner can change

  // NeuToken client list, addresses that can withdraw
  // these are accounts that have a verified IBAN account.
  address[] clients;

  // Euro tokens are minted when classical EUR is received
  function deposit(address client, uint256 client) deposit_manager_only;
  event Deposit(address client, uint256 client);

  // Known clients can withdraw their EURT and receive EUR on their account
  function withdraw(uint256 amount) client_only;
  event Withdraw(address client, uint256 amount);

  // TODO: Some lost their keys, sad, and now demands their euros to be transferred.

  // Standard ERC20
  function totalSupply() constant returns (uint256 totalSupply)
  function balanceOf(address _owner) constant returns (uint256 balance)
  function transfer(address _to, uint256 _value) returns (bool success)
  event Transfer(address indexed _from, address indexed _to, uint256 _value)

  // Advanced ERC20
  function transferFrom(address _from, address _to, uint256 _value) returns (bool success)
  function approve(address _spender, uint256 _value) returns (bool success)
  function allowance(address _owner, address _spender) constant returns (uint256 remaining)
  event Approval(address indexed _owner, address indexed _spender, uint256 _value)

  // ERC22 metadata
  string symbol = "NMK";
  string name = "NeuMark";
  uint decimals = 2; // Reflect Euro-token
}
