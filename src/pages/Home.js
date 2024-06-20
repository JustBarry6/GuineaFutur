import React from 'react';
import Dashboard from '../components/Dashboard';
import BlockchainProposalForm from '../components/BlockchainProposalForm';

function Home({ data, updateData }) {
  return (
    <div className="home">
      <div className="main-content">
        <div className="dashboard-container">
          <Dashboard data={data} />
        </div>
        <div className="form-container">
          <BlockchainProposalForm updateData={updateData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
