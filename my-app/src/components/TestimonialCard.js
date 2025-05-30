import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">TESTIMONIALS</h2>
      <div className="underline"></div>

      <div className="testimonial-container">
        <div className="quote-icon">❝</div>
        <p className="testimonial-text">
          Very great experience, excellent training, excellent trainer and specially Shahid Sir, 
          he helped me throughout not only with my classes but anything I’ve asked for. Highly recommend.
        </p>
        <div className="testimonial-footer">
          <img
            src="https://via.placeholder.com/60" 
            alt="Shahrukh Rehman"
            className="testimonial-image"
          />
          <div>
            <h4 className="testimonial-name">Shahrukh Rehman</h4>
            <div className="testimonial-stars">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
