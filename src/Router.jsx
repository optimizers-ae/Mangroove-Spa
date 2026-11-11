import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const Router = ({ onOpenBooking }) => {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenBooking={onOpenBooking} />} />
      <Route path="/about" element={<About onOpenBooking={onOpenBooking} />} />
      <Route path="/treatments" element={<Treatments onOpenBooking={onOpenBooking} />} />
      <Route path="/gallery" element={<Gallery onOpenBooking={onOpenBooking} />} />
      <Route path="/contact" element={<Contact onOpenBooking={onOpenBooking} />} />
      {/* Fallback to home */}
      <Route path="*" element={<Home onOpenBooking={onOpenBooking} />} />
    </Routes>
  );
};

export default Router;
