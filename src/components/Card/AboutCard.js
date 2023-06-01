import React from "react";
import "../css/aboutCard.css";
const AboutCard = () => {
  return (
    <div className="about-card">
      <h2 className="about-heading">About Project</h2>
      <p className="about-content">
        Connects is a web application that integrates video calling, real-time
        whiteboard sharing, and a collaborative web editor. It enables users to
        communicate and collaborate seamlessly in real time. The application
        leverages WebRTC technology for high-quality video calls with features
        like screen sharing and chat functionality. The real-time whiteboard
        sharing tool allows multiple users to draw and write on a shared
        whiteboard simultaneously. The collaborative web editor enables
        real-time editing and collaboration on documents and code snippets.
        {/* Firebase integration ensures real-time data synchronization and storage.
        The project is beneficial for remote teams, online education, virtual
        meetings, and code collaboration. Overall, it provides a comprehensive
        solution for effective communication and collaboration. */}
      </p>
    </div>
  );
};

export default AboutCard;
