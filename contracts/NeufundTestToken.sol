pragma solidity ^0.4.2;

import "./StandardToken.sol";

contract NeufundTestToken is StandardToken {
    function NeufundTestToken(uint _totalSupply) StandardToken(_totalSupply) {}
}
