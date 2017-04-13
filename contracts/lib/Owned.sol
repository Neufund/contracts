pragma solidity ^0.4.8;

import "../lib/RentrancyGuard.sol";
import "../lib/IERC20Basic.sol";

contract Owned is RentrancyGuard {

    address public owner;
    address private owner_nominee;

    modifier owner_only() {
        assert(msg.sender == owner);
        _;
    }

    modifier owner_nominee_only() {
        assert(msg.sender == owner_nominee);
        _;
    }

    function Owned() {
        owner = msg.sender;
    }

    // TODO: Solidity 0.4.10 will have this as a build-in
    function assert(bool cond) internal constant {
        if(!cond) {
            throw;
        }
    }

    function transfer_ownership(address new_owner) external owner_only {
        owner_nominee = new_owner;
        OwnershipNominated(owner, owner_nominee);
    }

    // Two step ownership transfer prevents accidentally sending to
    // address that can not call contracts.
    function accept_ownership() external owner_nominee_only {
        owner = owner_nominee;
        delete owner_nominee;
        OwnershipTransfered(owner, owner_nominee);
    }

    function terminate(IERC20Basic[] tokens) external owner_only non_rentrant {
        // Transfer tokens to owner (TODO: error handling)
        for(uint i = 0; i < tokens.length; i++) {
            uint256 balance = tokens[i].balanceOf(this);
            tokens[i].transfer(owner, balance);
        }

        // Transfer Eth to owner and terminate contract
        selfdestruct(owner);
    }

    event OwnershipNominated(address old_owner, address new_owner);
    event OwnershipTransfered(address old_owner, address new_owner);
}
