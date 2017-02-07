import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import crowdsale_artifacts from '../../build/contracts/NeufundCrowdsaleToken.json'

// CrowdsaleToken is our usable abstraction, which we'll use through the code below.
var CrowdsaleToken = contract(crowdsale_artifacts);