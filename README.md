# Contracts [![Build Status](https://travis-ci.org/Neufund/Contracts.svg?branch=master)](https://travis-ci.org/Neufund/Contracts)
WIP: Some basic smart contracts


# Build and test

*On testrpc*:
```
git clone https://github.com/Neufund/Contracts.git
cd Contracts
npm install
npm run testrpc &
npm run test
```

# Repositories of contracts

## Package managers

* https://www.ethpm.com/registry/packages
* https://www.npmjs.com/search?q=solidity
* https://dapple.readthedocs.io/en/master/packages/

## Collections

* https://github.com/OpenZeppelin/zeppelin-solidity
* https://github.com/axic/density
* https://github.com/ethereum/dapp-bin/tree/master/library
* https://github.com/androlo/standard-contracts/
* https://github.com/ethereum/solidity/tree/develop/std

## Libraries

* https://github.com/ConsenSys/Token-Factory
* https://github.com/ConsenSys/MultiSigWallet
* https://github.com/Arachnid/solidity-stringutils

## Projects

* https://github.com/melonproject/melon
* https://github.com/makerdao/maker-otc/blob/master/contracts
* https://github.com/ConsenSys/gnosis-contracts
* https://github.com/ConsenSys/singulardtv-contracts
* https://github.com/ConsenSys/repsys-contracts
* https://github.com/ConsenSys/btcrelay


# Guidelines to writing contracts

The overall design is Multi-contract & Multi-state. Contracts have owners and
owners can update references to other contracts.

[ ] TODO: For long-lived contracts a Hub and Spoke model is used.

* https://ethereum.stackexchange.com/questions/8551/methodological-security-review-of-a-smart-contract/8593#8593
* https://ethereum.stackexchange.com/questions/6204/writing-secure-smart-contracts-in-solidity
* https://eprint.iacr.org/2016/633.pdf

https://blog.ethereum.org/2017/01/07/introduction-light-client-dapp-developers/
TODO: ERC with `getLogEvents(logKeys[], uint firstBlock, uint lastBlock)`

// See: https://ethereum.stackexchange.com/questions/9745/is-there-any-way-for-a-contract-to-know-when-it-gets-sent-a-token
