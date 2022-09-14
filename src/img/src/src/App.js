import React from 'react';
import AboutUs from './aboutUS.js';
import DirectorMessage from './directorMessage.js';
import Slider from './ImageSlider';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Router>

    <AboutUs/>
    <DirectorMessage/>
    <h1>GALLERY</h1>
    <Slider/>
    </Router>
    </>
    
  )
}

export default App;
