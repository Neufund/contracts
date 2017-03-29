import web3 from './initWeb3.js'
import contract from 'truffle-contract'
import artifactor from 'truffle-artifactor'

export default name => {
  const artifacts = require(`../../build/contracts/${name}.json`)
  let contract_ = contract(artifacts)
  contract_.setProvider(web3.currentProvider)
  return contract_.deployed()
}

// TODO: Use registery
