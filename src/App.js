import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './About';
function App() {
  const[Mode,setMode]=useState('light');
  const[modeTxt,setModeTxt]=useState('Enable Dark Mode');
  const modeSwitch = ()=>{
      if(Mode==='light')
      {
        setMode('dark');
        setModeTxt('Disable Dark Mode');
        document.body.style.background='#131417';
      }
      else{
        setMode('light');
        setModeTxt('Enable Dark Mode');
        document.body.style.background='white';
      }
  };
  return (
    <>
    <Router>
      <Navbar  title="TextUtils" about="About" mode={Mode} darkMode={modeSwitch} modeTxt={modeTxt}/>
      <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={Mode}/>}/>
          <Route path="/about" element={<About mode={Mode}/>}/>
        </Routes>
    </Router>
    </>
  );
}
export default App;
