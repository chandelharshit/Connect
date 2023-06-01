import React from 'react';
import '../css/profileCard.css';

const ProfileCard = ({ name, job, image,rollNo }) => {
  return (
    <div className="profile-card">
      <div className="image">
        <img src={image} alt="" className="profile-img" />
      </div>

      <div className="text-data">
        <span className="name">{name}</span>
        <span className="job">{job}</span>
      </div>
     
      {/* C:\Users\ASUS\Documents\major\react-navbar-dropdown\src */}
      <div className="buttons">
        <button className="button">Roll No.- {rollNo}</button>
        {/* <button className="button">Message</button> */}
      </div>
      {/* <div className="media-buttons">
        <a href="#" style={{ background: '#4267b2' }} className="link">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" style={{ background: '#1da1f2' }} className="link">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" style={{ background: '#e1306c' }} className="link">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" style={{ background: '#ff0000' }} className="link">
          <i className="bx bxl-youtube"></i>
        </a>
      </div> */}
    </div>
  );
}

export default ProfileCard;
