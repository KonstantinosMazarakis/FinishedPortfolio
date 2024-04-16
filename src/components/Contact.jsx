import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../css/Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useRef } from 'react';
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";

init("YAhkeZrMmmQoUvmG_");

const Contact = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")
  const history = useHistory()
  const form = useRef();


  function store(key, value, expire) {
    let obj = {
      time: new Date().getTime(),
      value: value,
      expire: expire,
    }
    // You can only store strings
    let objStr = JSON.stringify(obj);
    localStorage.setItem(key, objStr);
  }



  const handleChange = (e) => {
    e.preventDefault();
    // localStorage.clear()
    console.log(localStorage.getItem("emails"))
    if (!localStorage.getItem("emails")) {
      localStorage.setItem("emails", 1)
    } else {
      localStorage.setItem("emails", parseInt(localStorage.getItem("emails")) + 1)
    }
    console.log(localStorage.getItem("emails"))


    //86,400,000
    // let d = new Date()
    if (!localStorage.getItem("date")) {
      localStorage.setItem("date", Date.now())
    }


    let num_of_emails = parseInt(localStorage.getItem("emails"))
    let date = parseInt(localStorage.getItem("date"))
    if (num_of_emails < 3) {

      console.log("send a email")
      emailjs.sendForm('service_rios4wr', 'template_g0vvpc2', form.current, 'YAhkeZrMmmQoUvmG_')
        .then((result) => {
            console.log(result.text);
            history.push("/")
        }, (error) => {
            console.log("ERROR" + error.text);
        });
    } else {
      alert("Too many attempts, Please try again within 24 hours")
      console.log("too many requests");

      //localstorage.getItem("date") -> minus current date.now() if that is great than 86,400,000 then its been over 24 hours
      let newtime = Date.now();
      if (newtime - date > 86400000) {
        //its been 24 hours
        console.log("minute passed")
        localStorage.clear()
        localStorage.setItem("emails", parseInt(localStorage.getItem("emails")) + 1)
        emailjs.sendForm('service_rios4wr', 'template_g0vvpc2', form.current, 'YAhkeZrMmmQoUvmG_')
        .then((result) => {
            console.log(result.text);
            history.push("/")
        }, (error) => {
            console.log("ERROR" + error.text);
        });
    } else {
      }
    }

  };

  return (<div className='contact expand-contact'>
    <form ref={form} onSubmit={handleChange} >
      <h1 className='blur-contact '>Contact</h1>
      <TextField
        className='m-2 txtField blur-contact '
        id="outlined-multiline-flexible"
        label="Name"
        placeholder='Name'
        name='name'
        required
        multiline
        maxRows={4}
        onChange={(e) => { setName(e.target.value) }} />
      <TextField
        className='m-2 txtField blur-contact '
        id="outlined-multiline-flexible"
        label="Email"
        placeholder='Email'
        name='email'
        type="email"
        required
        multiline
        maxRows={4}
        onChange={(e) => { setEmail(e.target.value) }} />
      <div>

        <TextField
          className='txtArea m-2 mb-4 blur-contact-txt '
          id="outlined-multiline-static"
          label="Message"
          placeholder='Message'
          name='message'
          required
          multiline
          rows={4}
          onChange={(e) => { setMessage(e.target.value) }} />
      </div>
      <div>
        <Button variant="contained" type='submit' className='blur-contact-button' endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </form>
    <p className='email blur-contact-p '><EmailIcon></EmailIcon> Email: konstantinos.mazarakis25@gmail.com</p>
    <p className='phone blur-contact-p2 '><ContactPhoneIcon></ContactPhoneIcon> Phone Number: 312-763-0955</p>

  </div>
  );
}
export default Contact
