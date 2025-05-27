import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/100x50?text=DUCAT" alt="DUCAT Logo" />
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
        <a href="#">Corporate Training</a>
        <a href="#">Online Registration</a>
        <a href="#">Certificate</a>
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
