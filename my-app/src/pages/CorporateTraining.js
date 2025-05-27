import React from 'react';
import './CorporateTraining.css';

function CorporateTraining() {
  return (
    <div className="corporate-training-container">
      <div className="corporate-left">
        <h2>
          Level Up Your <span>Workforce</span>, <br />
          Invest In Skills For a <span>Future-Proof Growth</span>
        </h2>
        <p>
          By investing in your team's skills today, you're building a strong foundation
          for future success.
        </p>
        <button className="download-btn">⬇️ DOWNLOAD BROCHURE</button>
      </div>

      <div className="corporate-right">
        <form className="enquiry-form">
          <h3>ENQUIRY NOW</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Center" />
          <input type="text" placeholder="Select a Course" />
          <input type="text" placeholder="Company Name" />
          <textarea placeholder="Any Query?"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CorporateTraining;
