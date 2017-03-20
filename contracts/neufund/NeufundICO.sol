pragma solidity ^0.4.9;

import "../lib/Owned.sol";
import "../kyc/KYCService.sol";
import "../neubank/EuroToken.sol";
import "./LimitedPartnerAgreement.sol";
import "./NeuMark.sol";

contract ICO is Owned {

  // Referenced contracts
  KYCService kyc;
  LimitedPartnerAgreement lpa;
  EuroToken euros;
  NeuMark neumark;
  address beneficiary; // owner?

  // Anchor investors have reserved Neumarks that they pledged to buy
  // On failure to buy, and when the publicly available Neumarks run out,
  // we offer the remaining Neumarks to the public.
  struct anchor_investor {
    address pubkey;
    uint256 ticket_size;
  }

  // ICO Parameters
  uint256 success_mininmum = 5e6;
  uint256 success_maximum = 15e6;
  uint256 ticket_minimum = 100;
  uint256 ticket_maximum = 1e6;
  uint256 nmk_per_eurt = 1;
  // ufixed0x256 discount_amount = ufixed0x256(0.05);
  uint256 discount_treshold = 5e5;
  uint256 ico_start; // TBD
  uint256 ico_duration = 30 days;
  uint256 anchor_pledge_expiry = 23 days;
  uint256 wire_transfer_grace_period = 14 days;
  anchor_investor[] anchor_investors;

  // POST-ICO Neufund parameters
  // ufixed0x256 management_fee = 0.0;
  // ufixed8x248 liquidation_preference = ufixed8x248(1.4);
  // ufixed0x256 carried_interest = ufixed0x256(0.2);

  // ICO state
  uint256 total_raised;



  // Participants need to have their KYC and the LPA

  // Participation is exclusively in EURO-Token

  // Euro tokens are converted to NeuMark at 1:1 or 1:presale


  // Final result:
  // * Euro Tokens received
  // * NeuMarks issued
}
