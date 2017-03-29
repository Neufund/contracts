pragma solidity ^0.4.8;

import "./IEthEurTrader.sol";
import "../lib/Owned.sol";
import "../neubank/EuroToken.sol";

contract EthEurTrader is IEthEurTrader, Owned {

  EuroToken euroToken;
  address trader;

  modifier trader_only() {
    if(msg.sender == trader) {
      _;
    }
  }

  function EthEurTrader(EuroToken euroToken_)
  {
    euroToken = euroToken_;
  }

  function set_trader(address trader_) owner_only {
    trader = trader_;
  }

  /// @dev We have only 2300 gas when called with send
  function () external payable {
    EthReceived(msg.sender, msg.value);
  }

  function traded(address client, uint256 amount) trader_only {
    euroToken.transfer(client, amount);
  }

  event EthReceived(address client, uint256 amount);
  // TODO event PoolLow();
  // TODO refunds
}
