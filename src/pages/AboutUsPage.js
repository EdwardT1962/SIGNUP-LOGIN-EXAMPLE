import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutUsPage.css';

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <Header />
      <h1>About Us</h1>
      <div className="company-overview">
        <h2>Company Overview</h2>
        <p>We are a leading family-driven service provider...</p>
        {/* More details about the company */}
      </div>
      <div className="team-members">
        <h2>Team Members</h2>
        {/* You can use the ProfileCard component here if you have one */}
      </div>
      <div className="contact-information">
        <h2>Contact Information</h2>
        <p>Email: contact@family-driver.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* More contact details */}
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
