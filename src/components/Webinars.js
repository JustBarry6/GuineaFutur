import React from 'react';
import '../assets/styles/components/Webinars.css';

function Webinars() {
  const webinars = [
    { title: 'Future of Blockchain', date: '2024-07-20', link: '#' },
    { title: 'Decentralized Governance', date: '2024-08-15', link: '#' },
    { title: 'Eco-friendly Practices', date: '2024-09-10', link: '#' },
  ];

  return (
    <div className="webinars">
      {webinars.map((webinar, index) => (
        <div key={index} className="card">
          <a href={webinar.link}>
            <h4>{webinar.title}</h4>
            <p>{webinar.date}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Webinars;
