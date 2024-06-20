import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/proposals">Proposals</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/collaboration">Collaboration</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
