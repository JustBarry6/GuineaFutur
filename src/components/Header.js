import React from 'react';
import '../assets/styles/components/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Guinée Futur</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/proposals">Proposals</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/collaboration">Collaboration</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
