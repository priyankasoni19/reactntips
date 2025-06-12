import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaClock,
  FaRupeeSign,
  FaFileDownload,
  FaProjectDiagram,
  FaGraduationCap,
} from 'react-icons/fa';
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
