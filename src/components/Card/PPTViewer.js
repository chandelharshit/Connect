import React from 'react';

const PPTViewer = ({ pptFile }) => {
  return (
    <div className="ppt-viewer">
      <iframe src={pptFile} title="PowerPoint Presentation" width="100%" height="600px"></iframe>
    </div>
  );
};

export default PPTViewer;