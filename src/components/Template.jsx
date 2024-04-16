import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/Template.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Certifications from './Certifications';
import Resume from './Resume';
import Projects from './Projects'


const Template = () => {
  const history = useHistory();  // Hook to access the history instance for redirection

  useEffect(() => {
      const handleResize = () => {
          // Check if the window width is 767px or less and the current path is '/resume'
          if (window.innerWidth <= 767 && window.location.pathname === '/resume') {
              history.push('/');  // Redirect to Home page
          }
      };

      handleResize();  // Execute the function once when the component mounts
      window.addEventListener('resize', handleResize);  // Add event listener for resize events

      // Clean up the event listener when the component unmounts
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [history]);  // Depend on history to re-run the effect if history object changes

  return (
      <div className="template">
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/skills">
                  <Skills />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/certifications">
                  <Certifications />
              </Route>
              <Route path="/resume">
                  <Resume />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>
          </Switch>
      </div>
  );
};
export default Template