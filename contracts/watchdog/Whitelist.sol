
contract Whitelist {
  // Watchdog whitelist. Exempts certain TXs from delays.
  list whiteListed {
    address address,   // Target address
    uint256 maxvalue,  // Maximum Ether value transfered (Note: does not handle token transfers!)
    bytes data_prefix  // Only txs with _data *starting* with these bytes are whitelisted
                       // This allows easy whitelisting of specific functions on a contract
                       // by filtering on the first four bytes. Consequitive bytes filter successive
                       // arguments to the function.
                       // For example the followin would whitelist transfering Unicorn tokens to Eth foundation
                       // {
                       //     0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7  (Unicorn token address)
                       //     2**256 -1   (no maxvalue limit)
                       //     0xa9059cbb… (function: transfer(address,uint256))
                       //     …fB6916095ca1df60bB79Ce92cE3Ea74c37c5d359   (first argument: Foundation tipjar address)
                       // }
  // TODO: It would make sense to add specific whitelisting support for ERC20 contracts.
  // TODO: If you whitelist a call that can call any function, then you effectively whitelisted everything! Be carefull what you whitelist.
  addWhiteListed(…) watchdog_only
  removeWhiteListed(…) watchdog_only
  event WhiteListUpdated()

  function is_white_listed(address _to, uint _value, bytes _data) returns (bool)
  {
    return false;
  }
}
