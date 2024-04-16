import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/Home.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import { saveAs } from "file-saver";



const Home = () =>{
  const saveFileResume = () => {saveAs("/downloads/resume.pdf","resume.pdf");};

    return <div className='parent'>
      <h1 className='expand'>
        <span className='blur'>Konstantinos </span>
        <span className='blur'> Mazarakis</span>
        </h1>
        <p className='expand button'>
        <Button  className=' animated tada' variant="outlined"  onClick={saveFileResume}>Resume</Button>
        </p>
    </div>



}
export default Home



