import web3 from './initWeb3.js';
import contract from 'truffle-contract';
import crowdsale_artifacts from '../../build/contracts/NeufundCrowdsaleToken.json'

var getICOContract = async function () {
    let ICO = contract(crowdsale_artifacts);
    ICO.setProvider(web3.currentProvider);
    return await ICO.deployed();
};

export default getICOContract;