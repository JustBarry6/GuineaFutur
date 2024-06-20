// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProposalContract {
    struct Proposal {
        uint id;
        string title;
        string description;
        address author;
        bool approved;
    }

    Proposal[] public proposals;
    uint public nextId;

    function createProposal(string memory _title, string memory _description) public {
        proposals.push(Proposal(nextId, _title, _description, msg.sender, false));
        nextId++;
    }

    function getProposal(uint _id) public view returns (Proposal memory) {
        require(_id < nextId, "Proposal does not exist");
        return proposals[_id];
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }

    function approveProposal(uint _id) public {
        require(_id < nextId, "Proposal does not exist");
        proposals[_id].approved = true;
    }
}
