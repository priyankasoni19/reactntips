import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/course">course</Link></li>
        <li><Link to="/heroescard">Heroes Placed</Link></li>
        <li><Link to="/course-details">Course Details</Link></li> 
       <li><Link to="/our-learners1">Our Learners1</Link></li>
       <li><Link to="/upcoming-batch">Upcoming Batch</Link></li>
       <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/our-placement">Our Placement</Link></li>
       <li><Link to="/privacy">Privacy</Link></li>
       <li><Link to="/policies">Policies</Link></li>
       <li><Link to="/follow-us">Follow Us</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
      <li><Link to="/address">Address</Link></li>
      <li><Link to="/placement-cards">Placement Cards</Link></li>
      <li><Link to="/about">About</Link></li>




      </ul>
    </div>
  );
}

export default Sidebar;
