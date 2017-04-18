## NF contracts review
This is highlevel overview rather than proper code review. Done on 2017.04.17

### faucet

1. accounts and daily_usage probable can be merged
2. no logic that adds accounts to faucet could be found anywhere in the system (except neukey/notary)
3. which address is registered for faucet? **** NeukeyNotary not yet implemented
4. i would add total limit as well, daily_limit is ok for anchors where we can give eth indefinitely, other users should have stricter limits, see remarks later

### KYC

1. we'll see how we develops but it would be nice to have a few more things available here like:
  - is address person or organization.
  - hash of IBAN etc. (I have IBAN and want to know if this is verified IBAN for given user)
  - in that case KYC becomes our attestation service for all identity-related data. tbd. if this is what we want

### Reentracy guard

1. it's `reentrancy` not `rentrancy`
2. this locks ALL methods with this modifier from being called back, flag is global
3. it costs 20k gas (writes word to storage)
4. can still be useful. IMO it's better to solve re-entrancy case by case

### neubank

1. `registery` -> `registry` (or you are using old english/latin?)
2. no logic for play money handling, EuroToken contract seems to be the best place to control spending
3. how `withdraw` works in EuroToken? is it called by the EURT holder and then bank withdrawal service listens to the event makes withdrawal to known IBAN account? if so
  - what if IBAN is not known. it is not checked in the contracts, tokens are burned and then it is up to off-chain service to handle this problem.
  - I would require a hash of IBAN in `withdraw` and pass it to `Withdraw` event so there is minimal verification and on-chain proof of where the funds go.
4. when depositing bank transfer id/reference number should be passed and then passed to `Deposit` event so we can correlate source bank deposit with smart contract transaction. otherwise some backend service is the source of truth.
5. see above - this information would enable automatic token trading of pre-approved transactions (see `WatchedWallet`)
6. what about enabling faucet for a client when deposit comes? like some global limit of N wei/eur token deposited (up to smth)

### neukey

1. it's too early for code review

### trader

1. lacks reverse mechanism: trade EURT to ETH and withdraw
2. assumes pool of EURT. I assume trader service will make sure that there are EURT in the pool by sending bank transfers to LHV that will be deposited into trader account. Correct? We need an initial pool of money that bank "lends" to trader. but then we have default risk. (see point 4)
3. on the other side reverse mechanism would require some ETH to be kept in the trader account.
4. we can make kraken account a deposit source for neubank backend service (new cash in kraken goes immediately to trader account and then we do not need a pool, if there's no EURT balance then trader simply waits for neubank to process EUR from the trade)

### watchdog

1. IMO `WatchedWallet` should be a library. why should we duplicate code?
2. should `Whitelist` have it's logic in library that can be easily swapped? I like current mechanism as well so no prob.
3. pre-approved token trades: AFAIK watched walled was supposed to have this mechanism
4. it's a little bit too early to code review this part

### neufund

1. LPA agreement should be a part of `Neumark` contract. anyone that owns neumark tokens signs it. You sign it by having balance > 0, so our balances are our signatories list.
For pledge `anchor_investors` (in the ICO) we can link to the same document or to some document with commercial terms (still waiting for Andre)

## general

1. mechanism that would allow to execute a token trade when deposit comes is lacking (approve mechanism in WatchedWallet?)
2. mechanism that adds users to faucet is missing
