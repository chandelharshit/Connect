import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe';
import Sidebar from '../Sidebar';
import MeetingPlanner from '../Card/MeetingPlanner';
import UserApp from '../Card/UserApp';
import ProjectHome from './ProjectHome';


export default function Meet() {
  return (
    <>
    
  
     <Iframe
        url="http://localhost:3000/"
        width="100%"
        height="580px"
      />
      
    </>
  );
}
