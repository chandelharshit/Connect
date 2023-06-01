import React from 'react';
// import '../../App.css';
import '../css/home.css';
import Iframe from 'react-iframe';
import Sidebar from '../Sidebar';
import MeetingPlanner from '../Card/MeetingPlanner';
import UserApp from '../Card/UserApp';
import { Button } from '../Button';


export default function Home() {
  return (
    <>
    <div className="container">
      <div className="content-wrapper">
        <p className="text">Your text goes here</p>
        <Button text="Try Project >>"/>
      </div>
    </div>
    </>
  );
}
