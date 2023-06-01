import React, { useEffect, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';
import io from 'socket.io-client';
import './css/codeEditor.css';

const socket = io('http://localhost:5000'); // Replace with your server's URL

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [sharedCode, setSharedCode] = useState('');
  const [shareableLink, setShareableLink] = useState('');
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');


  useEffect(() => {
    socket.on('code-update', (newCode) => {
      setCode(newCode);
    });
  }, []);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    socket.emit('code-update', value);
  };

  const handleGenerateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 8);
    setSharedCode(newCode);
    setShareableLink(window.location.href + '?code=' + newCode);
  };

  const handleJoinCode = () => {
    setShowJoinDialog(true);
  };

  const handleJoinSubmit = () => {
    if (joinCode) {
      setSharedCode(joinCode);
      setShareableLink(window.location.href.split('?')[0]);
    }
    setShowJoinDialog(false);
    setJoinCode('');
  };
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleJoinCancel = () => {
    setShowJoinDialog(false);
    setJoinCode('');
  };

  return (
    <div className='container'>
      <div className='inner-container'>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value='javascript'>JavaScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
          {/* Add more language options as needed */}
        </select>
       <CodeMirror
  value={code}
  options={{
    mode: selectedLanguage,
    theme: 'darcula',
    lineNumbers: true,
    lineWrapping: true,
  }}
  onBeforeChange={handleCodeChange}
/>

        <button onClick={handleGenerateCode}>Generate Code</button>
        <button onClick={handleJoinCode}>Join Code</button>
      </div>
      <p>Shared Code: {sharedCode}</p>
      <p>Shareable Link: {shareableLink}</p>

      {showJoinDialog && (
        <div className='dialog'>
          <input
            type='text'
            placeholder='Enter code'
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
          />
          <button onClick={handleJoinSubmit}>Join</button>
          <button onClick={handleJoinCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
