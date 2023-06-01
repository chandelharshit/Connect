import React, { useState } from 'react';
import '../../App.css';
import Iframe from 'react-iframe';
import Sidebar from '../Sidebar';
import MeetingPlanner from '../Card/MeetingPlanner';
import UserApp from '../Card/UserApp';
import ProjectHome from './ProjectHome';
import Calendar from './Calendar';


export default function MeetingPlan() {
    const [meetings, setMeetings] = useState([]);

    const updateCalendar = (newMeeting) => {
      setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
    };
  
    return (
      <div>
        <MeetingPlanner updateCalendar={updateCalendar} />
      </div>
    );
}
