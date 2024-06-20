import React from 'react';
import Articles from '../components/Articles';
import Videos from '../components/Videos';
import Webinars from '../components/Webinars';
import '../assets/styles/components/EducationPage.css';

function EducationPage() {
  return (
    <div className="education-page">
      <h2>Educational Resources</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Articles</h3>
          <Articles />
        </div>
        <div className="grid-item">
          <h3>Videos</h3>
          <Videos />
        </div>
        <div className="grid-item">
          <h3>Webinars</h3>
          <Webinars />
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
