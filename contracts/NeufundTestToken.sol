pragma solidity ^0.4.2;

import "./StandardToken.sol";

contract NeufundTestToken is StandardToken {
    function NeufundTestToken(uint totalSupplyInEther) StandardToken(totalSupplyInEther * 1 ether) {}
}
