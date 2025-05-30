import React from 'react';
import './CorporateTraining.css';
import OurPlacementPartners from '../components/OurPlacementPartners';
import CTP from '../components/CTP';
import DucatTrainingSteps from '../components/DucatTrainingSteps';
import FeatureCards from '../components/FeatureCards';
import DFCSection from '../components/DFCSection';
import GEGSection from '../components/GEGSection';
import TopCourses from '../components/TopCourses';
import OurSuccess from '../components/OurSuccess';
import EnquiryNow from '../components/EnquiryNow';
import FAQSection from '../components/FAQSection';
import TestimonialCard from '../components/TestimonialCard';


   





function CorporateTraining() {
  return (
    <div>
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
      
<OurPlacementPartners/>

<CTP/>

<DucatTrainingSteps/>

<FeatureCards/>

<DFCSection/>

<GEGSection/>

<TopCourses/>

<OurSuccess/>

<EnquiryNow/>

<FAQSection/>

<TestimonialCard/>


    </div>
    
  );
}

export default CorporateTraining;
