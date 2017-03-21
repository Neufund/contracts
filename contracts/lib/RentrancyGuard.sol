pragma solidity ^0.4.8;

contract RentrancyGuard {

  bool private rentrancy_lock = false;

  // @note non_rentrant should be applied to all `external` and `public`
  //       functions that can call arbitraty code. This happens if it
  //       uses `.send()`, `.call()`, `.callcode()` or `.delegatecall()`.
  //       These low-level functions are hidden for contract types.
  modifier non_rentrant() {
    if(rentrancy_lock == false) {
      rentrancy_lock = true;
      _;
      // Following requires at least Solidity 0.4.0!
      // (Otherwise return in function will skip this step)
      rentrancy_lock = false;
    }
  }

}
