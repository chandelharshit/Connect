import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe';
import Sidebar from '../Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MeetingPlanner from './MeetingPlan';
import UserApp from '../Card/UserApp';
import ProjectHome from './ProjectHome';
import Meet from './Meet';
import Calender from './Calendar';


export default function Project() {
  
  return (
    <Router>
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/project/meet" component={Meet} />
        <Route exact path="/project/meeting-planner" component={MeetingPlanner} />
        <Route exact path="/project/tools" component={ProjectHome} />
        <Route exact path="/project/calendar" component={Calender} />
      </Switch>
    </div>
  </Router>
  );
}
