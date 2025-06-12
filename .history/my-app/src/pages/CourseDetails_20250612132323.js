import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaClock,
  FaRupeeSign,
  FaFileDownload,
  FaProjectDiagram,
  FaGraduationCap,
} from 'react-icons/fa';
// import './CourseTemplate.css'; // optional styling

const DEFAULT_IMG = "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif";

const fixedCourses = {
  "mern stack": {
    description:
      "Build full-stack web applications powered by intelligent AI features. You’ll master MongoDB for flexible data models, Express.js for robust server APIs, React for dynamic user interfaces, and Node.js for seamless backend logic. Then layer in Generative AI: learn how to integrate pre-trained language and image models into your apps to drive chatbots, content generation, and smart recommendations.",
    duration: "5 Months",
    pdfLink: "https://example.com/mernstack-genai-course-outline.pdf",
    fees: "₹35,000 (GST not included)",
    projects: ["Live Projects"],
  },
  "mean stack": {
    description:
      "This comprehensive course blends the power of the MEAN Stack—MongoDB, Express.js, Angular, and Node.js—with cutting-edge Generative AI technologies. Learn to integrate AI features like intelligent chatbots, content generation, and recommendation systems into your apps.",
    duration: "5 Months",
    pdfLink: "https://example.com/meanstack-genai-course-outline.pdf",
    fees: "₹35,000 (GST not included)",
    projects: ["Live Projects"],
  },
  "cyber security": {
    description:
      "Learn to protect and audit digital systems while harnessing AI for smarter threat detection. Explore core security domains—network defense, ethical hacking, cryptography, and incident response—through simulations and real-world labs.",
    duration: "3 Months",
    pdfLink: "https://example.com/cybersecurity-genai-course-outline.pdf",
    fees: "₹20,000 (GST not included)",
    projects: ["Live Projects"],
  },
};

function CourseDetails() {
  const location = useLocation();
  const courseName = location.state?.course?.toLowerCase();
  const course = fixedCourses[courseName];

  const navigate = useNavigate();

  if (!course) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Course not found</h2>
        <p>Please go back and select a course.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="course-details">
      lorem50
       juininuuinihuhuui
    </div>
  );
}

export default CourseDetails;
