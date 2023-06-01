import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaUserFriends, FaTools, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import '../css/projectHome.css'; 
import { FaHome, FaCalendarPlus } from 'react-icons/fa';
import CodeEditor from '../CodeEditor';

const ProjectHome = () => {
  return (
    // <div className="project-home-project-home-card-container">
    //   <Link to="/route1" className="project-home-card">
    //     <FaCalendarPlus className="project-home-card-icon" />
    //     <span className="project-home-card-text">Meeting Planner</span>
    //   </Link>
    //   <Link to="/route2" className="project-home-card">
    //     <FaHome className="project-home-card-icon" />
    //     <span className="project-home-card-text">Home</span>
    //   </Link>
    //   <Link to="/route3" className="project-home-card">
    //     <FaCalendarAlt className="project-home-card-icon" />
    //     <span className="project-home-card-text">Calendar</span>
    //   </Link>
    //   <Link to="/route4" className="project-home-card">
    //     <FaHome className="project-home-card-icon" />
    //     <span className="project-home-card-text">Home</span>
    //   </Link>
    // </div>

    <CodeEditor/>
  );
};

export default ProjectHome;
