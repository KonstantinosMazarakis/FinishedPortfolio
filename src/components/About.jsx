import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/About.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const About = () =>{

  return <div className='parent1'>
  <div className='expand1'>
    <h1><span className='blur'>WHO AM I? </span></h1>
    <p>
    <span className='blur2'>Hello, I'm Kostas Mazarakis, a dedicated software developer based in Indianapolis, IN. Originally from Greece and having lived in the USA for eight years,</span>
    <span className='blur3'>I bring a global perspective to my passion for web design and software development.</span>
    </p>
    
    <p>
    <span className='blur5'>I hold a Bachelor's degree in Software Engineering from Western Governors University, an Associate's degree as a Computer Technician from IEK AKMI in Thessaloniki, Greece, </span>
    <span className='blur6'> and a Technical degree in the same field from Second EPAL in Corfu, Greece. Further enhancing my skills, I have completed a Software Development certification from Coding Dojo and have obtained several prestigious certifications,
     including HTML5 & CSS3 Specialist from CIW, CompTIA Project+ from CompTIA, AWS Certified Cloud Practitioner from Amazon, and ITIL Foundation Certification from AXELOS.</span>
    </p>

    <p>
    <span className='blur7'>With intensive training and more than 5 full-scale projects under my belt, I actively maintain over 100 repositories on GitHub.</span>
    <span className='blur8'>My career is characterized by a relentless pursuit of perfection, aiming to make a significant impact in the coding industry.</span>
    </p>

    <p>
    <span className='blur7'>Outside of professional interests, I enjoy the adrenaline rush of fast cars and motorcycles and the immersive world of gaming. </span>
    <span className='blur8'>I am continuously seeking opportunities to challenge myself and apply my diverse skills towards achieving outstanding results in my career.</span>
    </p>
    </div>
</div>


}
export default About
