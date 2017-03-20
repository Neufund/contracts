
The overall design is Multi-contract & Multi-state. Contracts have owners and
owners can update references to other contracts.

[ ] TODO: For long-lived contracts a Hub and Spoke model is used.

* https://ethereum.stackexchange.com/questions/8551/methodological-security-review-of-a-smart-contract/8593#8593
* https://ethereum.stackexchange.com/questions/6204/writing-secure-smart-contracts-in-solidity
* https://eprint.iacr.org/2016/633.pdf

https://blog.ethereum.org/2017/01/07/introduction-light-client-dapp-developers/
TODO: ERC with `getLogEvents(logKeys[], uint firstBlock, uint lastBlock)`

//
//   P L A T F O R M
//

//   G O V E R N A N C E

//
//    N E U B A N K
//

// See: https://ethereum.stackexchange.com/questions/9745/is-there-any-way-for-a-contract-to-know-when-it-gets-sent-a-token

// NeuToken Ownership contract
contract NeuTokenGovernance is BoringStandardMultiSignatureWallet {
  execute(address _to, uint _value, bytes _data) returns (bytes32 _id)
  confirm(bytes32 _id) returns (bool _success)
}



//
//   N E U   F U N D
//


contract PreSale {

  kyc = KYCService(…)
  lpa = LimitedPartnerContract(…)

  uint min_ticket_size = …; // EURO TOKEN

  // Participants need to have their KYC and the LPA
  // Participation is exclusively in EURO-Token

  // PreSale is converted into ICO when ICO starts

}

//
//   G O A T   M A R K E T
//


contract AnimalFactory {

}

contract Animal {
  string species;
  string name;
  string url;
  string url;
}

contract Goat is Animal {

}


//
//   N E U F U N D
//
