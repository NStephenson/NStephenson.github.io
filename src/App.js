import React, { Component } from 'react';
import './App.css';
import { AboutMe } from './components/aboutMe'
import { Resume } from './components/resume'
import { Homepage } from './components/home'
import { ContactPage } from './components/contactPage'
import { Projects } from './components/projects'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">

      {/* This is to create a border  */}
      <div id="left"></div>
      <div id="right"></div> 
      <div id="top" className="row"></div>
      <div id="bottom" className="row"></div>
      <Router>
      <div className="container-fluid site-content row">
          <header className="App-header col-12">
            <nav className="navbar navbar-expand-md">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About Me</Link>
              <Link to="/projects" className="nav-item nav-link">Projects</Link>
              <Link to="/resume" className="nav-item nav-link">Resume</Link>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </nav>
            
          </header>
        <div className="main col-12">
        

          <Route exact path="/" component= { Homepage }/>
          <Route path="/about"  component= { AboutMe }/>
          <Route path="/projects"  component= { Projects }/>
          <Route path="/resume"  component= { Resume }/>
          <Route path="/contact"  component= { ContactPage }/>

        <div className="row">
          <footer className="footer col-12">Copyright © 2018 - Nicholas Stephenson - <a href="https://github.com/NStephenson/nstephenson.github.io">Source Code</a></footer>
        </div>
        
        </div>
      
        </div>
      </Router>
        
      </div>
    );
  }
}

export default App;
