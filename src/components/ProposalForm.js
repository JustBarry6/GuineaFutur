import React, { useState } from 'react';
import '../assets/styles/components/ProposalForm.css';

function ProposalForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      // Logique pour soumettre la proposition
      console.log('Title:', title, 'Description:', description);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form className="proposal-form" onSubmit={handleSubmit}>
      <h2>Submit a Proposal</h2>
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
      <button type="submit">Submit</button>
      {success && <p className="success-message">Proposal submitted successfully!</p>}
    </form>
  );
}

export default ProposalForm;
