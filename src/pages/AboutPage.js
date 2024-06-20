import React from 'react';
import '../assets/styles/components/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind this project.</p>
      </header>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>We aim to foster transparency, collaboration, and innovation in governance, empowering citizens and driving sustainable development in Guinea.</p>
      </section>
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>Our vision is a future where technology bridges the gap between the government and the people, creating a more inclusive and participatory society.</p>
      </section>
      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/path/to/image1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Project Lead</p>
          </div>
          <div className="team-member">
            <img src="/path/to/image2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/path/to/image3.jpg" alt="Team Member 3" />
            <h3>Ahmed Khan</h3>
            <p>Blockchain Expert</p>
          </div>
          <div className="team-member">
            <img src="/path/to/image4.jpg" alt="Team Member 4" />
            <h3>Maria Garcia</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Guinée Futur. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
