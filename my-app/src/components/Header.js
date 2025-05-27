import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="NTI-logo_color.png" alt="DUCAT Logo" />
        <span>The IT Training School</span>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#">Courses ▼</a>
          <div className="dropdown-content">
            <a href="#">Web Development</a>
            <a href="#">Java</a>
            <a href="#">Python</a>
          </div>
        </div>
        <a href="#">Placement</a>
        <Link to="/CorporateTraining">Corporate Training</Link>
        
         <Link to="/OnlineRegistrationForm">Online Registration</Link>
         <Link to="/Certificate">Certificate</Link>

        
        <div className="ai-guidance">
          <span className="ai-badge">AI-Powered</span>
          <a href="#" className="career-guidance">
            Career Guidance
            <span className="tooltip">Free career guidance. Chat with our AI expert!</span>
          </a>
        </div>
        <div className="dropdown">
          <a href="#">Others ▼</a>
          <div className="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
