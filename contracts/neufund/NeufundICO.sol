pragma solidity ^0.4.8;

import "../lib/Owned.sol";
import "../kyc/KYCRegistery.sol";
import "../neubank/EuroToken.sol";
import "./LimitedPartnerAgreement.sol";
import "./Neumark.sol";

contract NeufundICO is Owned {

  enum State {
    Before,
    During,
    Success,
    Failure
  }

  // Anchor investors have reserved Neumarks that they pledged to buy
  // On failure to buy, and when the publicly available Neumarks run out,
  // we offer the remaining Neumarks to the public.
  struct anchor_investor {
    address pubkey;
    uint256 ticket_size;
  }

  // Referenced contracts
  KYCRegistery public kyc;
  LimitedPartnerAgreement public lpa;
  EuroToken public euro;
  Neumark public neumark;

  // ICO Parameters
  uint256 public success_minimum = 5000000;
  uint256 public success_maximum = 15000000;
  uint256 public ticket_minimum = 100;
  uint256 public ticket_maximum = 1000000;
  uint256 public nmk_per_eurt = 1;
  // ufixed0x256 discount_amount = ufixed0x256(0.05);
  uint256 public discount_treshold = 500000;
  uint256 public ico_start; // TBD
  uint256 public ico_duration = 30 days;
  uint256 public anchor_pledge_expiry = 23 days;
  uint256 public wire_transfer_grace_period = 14 days;
  anchor_investor[] public anchor_investors;

  // POST-ICO Neufund parameters
  // ufixed0x256 management_fee = 0.0;
  // ufixed8x248 liquidation_preference = ufixed8x248(1.4);
  // ufixed0x256 carried_interest = ufixed0x256(0.2);

  // ICO state
  uint256 total_raised;

  function NeufundICO(
    KYCRegistery kyc_,
    LimitedPartnerAgreement lpa_,
    EuroToken euro_,
    Neumark neumark_)
  {
    kyc = kyc_;
    lpa = lpa_;
    euro = euro_;
    neumark = neumark_;
  }

  modifier only_eligible() {
    address client = tx.origin;
    if(kyc.is_kyced(client) && lpa.hasSigned(client)) {
      _;
    }
  }

  // Participation is exclusively in EURO-Token

  // Euro tokens are converted to NeuMark at 1:1 or 1:presale


  // Final result:
  // * Euro Tokens received
  // * NeuMarks issued
}
