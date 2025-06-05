import React, { useState } from "react";
import "./CoursesMenu.css";

const courses = [
  "Diploma Courses + Integrated AI",
  "School of AI",
  ".NET",
  "Python",
  "Java",
  "Software Testing",
  "Web Designing - Full Stack Development",
  "Programming Languages",
  "Cloud Computing",
  "Salesforce",
  "CAD Training",
  "Mobile Application Development",
  "Network & Security",
  "Digital Marketing",
  "MIS - Advanced Excel - BI Tools",
  "ERP",
  "Industrial Training",
  "Others",
];

const CoursesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        Courses ▼
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {courses.map((course, index) => (
            <div key={index} className="dropdown-item">
              {course}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesMenu;
