import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contract } from '../web3';
import '../assets/styles/components/ProposalDetails.css';

function ProposalDetails() {
  const { id } = useParams();
  const [proposal, setProposal] = useState(null);

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const proposal = await contract.methods.getProposal(id).call();
        setProposal(proposal);
      } catch (error) {
        console.error("Error fetching proposal:", error);
      }
    };
    fetchProposal();
  }, [id]);

  if (!proposal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="proposal-details">
      <h2>{proposal.title}</h2>
      <p>{proposal.description}</p>
      <p className="author">Author: {proposal.author}</p>
      <p className={`status ${proposal.approved ? 'approved' : ''}`}>
        Status: {proposal.approved ? 'Approved' : 'Pending'}
      </p>
    </div>
  );
}

export default ProposalDetails;
