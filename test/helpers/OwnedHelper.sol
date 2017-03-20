pragma solidity ^0.4.8;

import "../../contracts/lib/Owned.sol";

contract OwnedHelper is Owned {

  // Allow receiving ETH in constructor
  function OwnedHelper() payable {
  }
}
