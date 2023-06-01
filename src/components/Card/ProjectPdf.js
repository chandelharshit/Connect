import React from 'react';
// import '../css/projectPdf.css'
const ProjectPdf = () => {
  return (
    <div className="about-card">
      <h2>About</h2>
      <div className="pdf-container">
        <iframe
          src="C:\Users\ASUS\Documents\major\react-navbar-dropdown\src\projectFiles\reportofconnects.pdf"
          title="PDF Document"
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectPdf;
