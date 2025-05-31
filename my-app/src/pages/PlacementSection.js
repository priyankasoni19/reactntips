import React from 'react';
import './PlacementSection.css';
import Placement from '../components/Placement';



const PlacementSection = () => {
  return (
    <>
      <div>
        <section className="placement-section">
          <h2 className="placement-title">Best placements offered</h2>
          <p className="placement-description">
            We provide best career guidance along with appropriate placements.
          </p>
        </section>
      </div>
      <Placement />


    </>

  );
};

export default PlacementSection;
