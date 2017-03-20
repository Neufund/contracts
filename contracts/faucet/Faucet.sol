
//    F A U C E T   S E R V I C E

// Smart contract to keep accounts funded with enough eth to pay for transactions
contract Faucet {

  // Contract state
  * Contract owner / manager = PlatformGovernance(address)
  * Pool minimum
  * minimum balance on accounts
  * target balance on accounts
  * daily limit for accounts
  * list of fauceted accounts
  * State required to enforce daily limits

  // setters for all contract parameters and functions for contract lifecycle

  // If account balance at address is below min_balance, fill it up to target balance,
  // not exceeding the daily limit.
  faucet(address) everyone

  event Funded(address, old_balance, amount); // An account has been funded
  event AccountLimited(address, ); // Account has reached
  event Pool_low;  // The pool is running low and needs to be refunded
}
