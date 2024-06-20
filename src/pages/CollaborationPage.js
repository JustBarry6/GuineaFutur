import React from 'react';
import '../assets/styles/components/CollaborationPage.css';

function CollaborationPage() {
  return (
    <div className="collaboration-page">
      <h2>Collaboration Opportunities</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Submit a Proposal</h3>
          <p>Join hands with us to build a better future. Submit your innovative proposals and get a chance to collaborate with top experts.</p>
          <button>Submit Now</button>
        </div>
        <div className="grid-item">
          <h3>Partner with Us</h3>
          <p>Become a partner and work with us on exciting projects. Together, we can achieve great things.</p>
          <button>Partner Now</button>
        </div>
        <div className="grid-item">
          <h3>Join Our Team</h3>
          <p>We are looking for passionate individuals to join our team. Explore open positions and become a part of our mission.</p>
          <button>Join Now</button>
        </div>
        <div className="grid-item">
          <h3>Community Projects</h3>
          <p>Engage with community-driven projects and make a meaningful impact. Collaborate with local communities to drive change.</p>
          <button>Explore Projects</button>
        </div>
      </div>
    </div>
  );
}

export default CollaborationPage;
