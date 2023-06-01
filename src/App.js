import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Consulting from './components/pages/Consulting';
import Sidebar from './components/Sidebar';
import Project from './components/pages/Project'

function App() {
  return (
    <Router>
      <Navbar />
     
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/project' component={Project} />
        <Route path='/our-team' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about-project' component={ContactUs} />
        <Route path='/consulting' component={Consulting} />

       
      </Switch>
    </Router>
  );
}

export default App;
