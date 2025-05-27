import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="NTI-logo_color.png" alt="NTI Logo" />
        <span>The IT Training School</span>
      </div>

      <button className="hamburger" onClick={() => setNavActive(!navActive)}>
        ☰
      </button>

      <nav className={`nav ${navActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>

        <div className="dropdown">
          <button>Courses ▼</button>
          <div className="dropdown-content">
            <Link to="/courses/web-development">Web Development</Link>
            <Link to="/courses/java">Java</Link>
            <Link to="/courses/python">Python</Link>
          </div>
        </div>

        <Link to="/placement">Placement</Link>
        <Link to="/corporate-training">Corporate Training</Link>
        <Link to="/online-registration">Online Registration</Link>
        <Link to="/certificate">Certificate</Link>

        <div className="ai-guidance">
          <span className="ai-badge">AI-Powered</span>
          <a href="#" className="career-guidance">
            Career Guidance
            <span className="tooltip">Free career guidance. Chat with our AI expert!</span>
          </a>
        </div>

        <div className="dropdown">
          <button>Others ▼</button>
          <div className="dropdown-content">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
