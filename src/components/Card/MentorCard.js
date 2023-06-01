import "../css/mentorCard.css";

import React, { useState } from 'react';
import AboutCard from "./AboutCard";
import InfoCard from "./InfoCard";
import studentData  from 'C:/Users/ASUS/Documents/major/react-navbar-dropdown/src/Data/nameAndRoll.js'
import PPTViewer from "./PPTViewer";
// import ProjectPdf from "./ProjectPdf";

const MentorCard = ({ name, job, imageSrc }) => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleSubOptionClick = (page) => {
    setCurrentPage(page);
  };
  const renderPage = () => {
    if (currentPage === 'sub-option1') {
        return <AboutCard/>;
    } else if (currentPage === 'sub-option2') {
      return <AboutCard/>;
    } else if (currentPage === 'sub-option3') {
        // return <ProjectPdf/>;
    } else if (currentPage === 'sub-option4') {
        return<AboutCard/>;
    } else if (currentPage === 'sub-option5') {
        return <InfoCard   />;
    } else {
        return <AboutCard/>;
    }
  };

  return (
    <div className="card">
      <div className="sidebar">
        <ul className="sub-options">
          <li onClick={() => handleSubOptionClick('sub-option1')}>What is Connects</li>
          <li onClick={() => handleSubOptionClick('sub-option2')}>Technology Used</li>
          <li onClick={() => handleSubOptionClick('sub-option3')}>Project Report</li>
          {/* <li onClick={() => handleSubOptionClick('sub-option4')}>PPt</li> */}
          <li onClick={() => handleSubOptionClick('sub-option5')}>Our Team</li>
        </ul>
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default MentorCard;

