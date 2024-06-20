import React, { useState } from 'react';
import { web3, contract } from '../web3';
import '../assets/styles/components/ProposalForm.css';

function BlockchainProposalForm({ updateData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description) {
      try {
        setLoading(true);
        const accounts = await web3.eth.getAccounts();
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.createProposal(title, description).send({
          from: accounts[0],
          gasPrice: gasPrice,
        });
        setLoading(false);
        setSuccess(true);
        setTitle('');
        setDescription('');
        updateData(1, 0); // Mise à jour des données après une soumission réussie
        setTimeout(() => setSuccess(false), 3000);
      } catch (error) {
        setLoading(false);
        console.error('Error submitting proposal:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form className="proposal-form" onSubmit={handleSubmit}>
      <h2>Submit a Blockchain Proposal</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      ></textarea>
      <button type="submit" disabled={loading}>Submit</button>
      {loading && <p>Loading...</p>}
      {success && <p className="success-message">Proposal submitted successfully!</p>}
    </form>
  );
}

export default BlockchainProposalForm;
