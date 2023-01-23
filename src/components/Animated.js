import React from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Home from './Home/home';
import {AnimatePresence} from 'framer-motion'

const Animated =() =>{
    const location = useLocation();
return(
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='portfolio' element={<Portfolio />} />
    <Route path='contact' element={<Contact />} />
  </Routes>
  </AnimatePresence>
)
}

export default Animated