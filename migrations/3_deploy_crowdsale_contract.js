var NeufundTestToken = artifacts.require("./NeufundTestToken.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");

module.exports = function (deployer) {
    /**
     * address ifSuccessfulSendTo,
     * uint fundingGoalInEthers,
     * uint durationInMinutes,
     * uint etherCostOfEachToken,
     * Token addressOfTokenUsedAsReward
     */
    deployer.then(()=> {
        return NeufundTestToken.deployed();
    }).then((instance)=> {
        console.log(instance.address);
        var ifSuccessfulSendTo = "0xb67fb67eb9e4700c90f2ab65c8ecbb3b687d49c7";
        var fundingGoalInEthers = 1;
        var durationInMinutes = 1;
        var etherCostOfEachToken = 1;
        var addressOfTokenUsedAsReward = instance.address;
        return deployer.deploy(Crowdsale,
            ifSuccessfulSendTo,
            fundingGoalInEthers,
            durationInMinutes,
            etherCostOfEachToken,
            addressOfTokenUsedAsReward);
    });
};
