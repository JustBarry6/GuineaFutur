import React, { useEffect, useState } from 'react';
import { contract } from '../web3';
import '../assets/styles/components/ProposalList.css';

function ProposalList() {
  const [proposals, setProposals] = useState([]);
  const [error, setError] = useState(null);

  const fetchProposals = async () => {
    try {
      const proposalsCount = await contract.methods.nextId().call();
      console.log('Proposals Count:', proposalsCount);
      const proposals = [];
      for (let i = 0; i < proposalsCount; i++) {
        const proposal = await contract.methods.getProposal(i).call();
        console.log('Fetched Proposal:', proposal);
        proposals.push(proposal);
      }
      setProposals(proposals);
    } catch (error) {
      console.error("Error fetching proposals:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="proposal-list">
      <h2>Proposals</h2>
      <ul>
        {proposals.map((proposal) => (
          <li key={proposal.id}>
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
            <a href={`/proposal/${proposal.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProposalList;
