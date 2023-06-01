import React, { useState } from 'react';
import '../css/calender.css';
import CalendarComponent from '../Card/CalenderComponent';

const Calendar = () => {
    const [meetings, setMeetings] = useState([]);
  
    const updateCalendar = (newMeeting) => {
      setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
    };
  return (
    <CalendarComponent meetings={meetings}/>
  );
};

export default Calendar;
