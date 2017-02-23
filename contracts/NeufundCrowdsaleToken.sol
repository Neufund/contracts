pragma solidity ^0.4.8;

import "zeppelin-solidity/contracts/token/CrowdsaleToken.sol";

contract NeufundCrowdsaleToken is CrowdsaleToken {
    string public name = "NeufundCrowdsaleToken";
    string public symbol = "NCT";
}