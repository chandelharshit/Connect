
import '../css/meetingPlanner.css';
import React, { useState, useEffect } from 'react';

const MeetingPlanner = ({ updateCalendar }) => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingStartTime, setMeetingStartTime] = useState('');
  const [meetingEndTime, setMeetingEndTime] = useState('');
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const storedMeetings = localStorage.getItem('meetings');
    if (storedMeetings) {
      setMeetings(JSON.parse(storedMeetings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meetings', JSON.stringify(meetings));
  }, [meetings]);

  const handleTitleChange = (event) => {
    setMeetingTitle(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setMeetingStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setMeetingEndTime(event.target.value);
  };

  const addMeeting = () => {
    const newMeeting = {
      title: meetingTitle,
      startTime: meetingStartTime,
      endTime: meetingEndTime,
    };

    setMeetingTitle('');
    setMeetingStartTime('');
    setMeetingEndTime('');

    // Update the calendar with the new meeting
    updateCalendar(newMeeting);

    // Add the meeting to the list
    setMeetings([...meetings, newMeeting]);
  };

  const deleteMeeting = (index) => {
    const updatedMeetings = [...meetings];
    updatedMeetings.splice(index, 1);
    setMeetings(updatedMeetings);
  };

  return (
    <div className="meeting-planner">
      <h1 className="title">Meeting Planner</h1>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={handleTitleChange}
        />
        <input
          type="datetime-local"
          className="input"
          value={meetingStartTime}
          onChange={handleStartTimeChange}
        />
        <input
          type="datetime-local"
          className="input"
          value={meetingEndTime}
          onChange={handleEndTimeChange}
        />
        <button className="add-button" onClick={addMeeting}>
          Add Meeting
        </button>
      </div>
      <div className="table-wrapper">
      <table className="meeting-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.title}</td>
              <td>{meeting.startTime}</td>
              <td>{meeting.endTime}</td>
              <td>
                <button className="join-button">Join Meeting</button>
                <button className="delete-button" onClick={() => deleteMeeting(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MeetingPlanner;
