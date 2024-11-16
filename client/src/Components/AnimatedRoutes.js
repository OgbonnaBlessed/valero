import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../Pages/Home';

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes