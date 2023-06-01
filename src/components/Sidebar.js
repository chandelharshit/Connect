import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserFriends,FaCalendarPlus, FaTools, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      <li>
          <Link to="/">
            <FaHome />
            <li className='liText'>
          Home
        </li>
          </Link>
        </li>
        <li>
          <Link to="/project/meet">
            <FaUserFriends /> 
            <li className='liText'>Meet</li>
          </Link>
        </li>
        <li>
          <Link to="/project/tools">
            <FaTools /> <li className='liText'>Tools</li>
          </Link>
        </li>
        <li>
          <Link to="/project/calendar">
            <FaCalendarAlt /> <li className='liText'>Calendar</li>
          </Link>
        </li>
        <li>
          <Link to="/project/meeting-planner">
          <FaCalendarPlus/> <li className='liText'>Planner</li>
          </Link>
        </li>
        
        <li>
          <Link to="/about">
            <FaInfoCircle /> <li className='liText'>About </li>
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
