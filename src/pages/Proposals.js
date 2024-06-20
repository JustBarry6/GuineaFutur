import React from 'react';
import ProposalList from '../components/ProposalList';
import '../assets/styles/pages/Proposals.css';

function Proposals() {
  return (
    <div className="proposals">
      <h2>Proposals</h2>
      <ProposalList />
    </div>
  );
}

export default Proposals;
