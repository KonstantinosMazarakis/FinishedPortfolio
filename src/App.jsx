import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/App.css';
import NavBar from './components/NavBar';
import Template from './components/Template';

function App() {
  return (
    <BrowserRouter>
    <div className="App container flexed">
      <NavBar></NavBar>
      <Template></Template>
    </div>
    </BrowserRouter>
  );
}

export default App;
