import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/NavBar.css';
import {
    Link
  } from "react-router-dom";
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import GitHubIcon from '@material-ui/icons/GitHub';

  const NavBar = () => {
    const history = useHistory();
    const [value, setValue] = useState(window.location.pathname);

    const handleNavigation = (path, event) => {
        event.preventDefault();  // Prevent the Link default navigation
        if (path === '/resume' && window.innerWidth <= 767) {
            history.push('/');
            setValue('/');  // Set value to home as we're redirecting there
        } else {
            history.push(path);
            setValue(path);  // Set value to the path we're navigating to
        }
    };

    return (
        <nav>
            <img className='logo' src="/images/kostas.jpg" alt="fg" />
            <h3 className='mt-4'>Konstantinos Mazarakis</h3>
            <p className='mb-4'>FULLSTACK DEVELOPER</p>
            <Link to="/" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/', e)} id={value === "/" ? "active" : ""}>Home</Link>
            <Link to="/about" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/about', e)} id={value === "/about" ? "active" : ""}>About</Link>
            <Link to="/projects" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/projects', e)} id={value === "/projects" ? "active" : ""}>Projects</Link>
            <Link to="/skills" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/skills', e)} id={value === "/skills" ? "active" : ""}>Skills</Link>
            <Link to="/resume" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/resume', e)} id={value === "/resume" ? "active" : ""}>Resume</Link>
            <Link to="/certifications" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/certifications', e)} id={value === "/certifications" ? "active" : ""}>Certifications</Link>
            <Link to="/contact" className='nv hover-underline-animation' onClick={(e) => handleNavigation('/contact', e)} id={value === "/contact" ? "active" : ""}>Contact</Link>
            <p className='mt-5'>
                <span className='me-2'><a href="https://www.linkedin.com/in/konstantinos-mazarakis/"><LinkedInIcon fontSize='large' color="primary"/></a></span>
                <span><a className='style-delete' href="https://github.com/KonstantinosMazarakis"><GitHubIcon fontSize='large'/></a></span>
            </p>
        </nav>
    );
};

export default NavBar;