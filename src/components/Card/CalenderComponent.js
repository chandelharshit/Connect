import React, { useState } from 'react';
import '../css/calender.css';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [meetings, setMeetings] = useState([]);

  // Function to navigate to the previous month
  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  // Function to navigate to the next month
  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  // Function to add a meeting to the calendar
  const addMeetingToCalendar = (meeting) => {
    setMeetings((prevMeetings) => [...prevMeetings, meeting]);
  };

  // Function to remove a meeting from the calendar
  const removeMeetingFromCalendar = (index) => {
    setMeetings((prevMeetings) => prevMeetings.filter((_, i) => i !== index));
  };

  // Function to generate the calendar grid for the current month
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarGrid = [];

    // Fill the grid with empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }

    // Fill the grid with the days of the month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const meetingsForDay = meetings.filter(
        (meeting) =>
          meeting.date.getFullYear() === year &&
          meeting.date.getMonth() === month &&
          meeting.date.getDate() === i
      );

      calendarGrid.push(
        <div key={`day-${i}`} className="day-cell">
          <span className="day-number">{i}</span>
          {meetingsForDay.length > 0 && (
            <ul className="meeting-list">
              {meetingsForDay.map((meeting, index) => (
                <li key={`meeting-${index}`}>
                  {meeting.title} - {meeting.time}
                  <button onClick={() => removeMeetingFromCalendar(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    return calendarGrid;
  };

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div className="calendar-navigation">
        <button onClick={prevMonth}>Previous Month</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={nextMonth}>Next Month</button>
      </div>
      <div className="calendar-grid">{generateCalendar()}</div>
    </div>
  );
};

export default CalendarComponent;
