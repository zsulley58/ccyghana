import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewsAnnouncement from './pages/NewsAnnouncement';
import EventCalendar from './pages/EventCalendar';
import EventGallery from './pages/EventGallery';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Box from './components/Box';
import Projects from './components/Projects'; // Import the Projects component
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/news-announcement' element={<NewsAnnouncement />} />
        <Route path='/event-calendar' element={<EventCalendar />} />
        <Route path='/event-gallery' element={<EventGallery />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/contact-us' element={<ContactUs />} />
        
      </Routes>
      <Hero />
      <Box />
      <Projects /> {/* Added the Projects component here */}
      <Footer />
    </div>
  );
};

export default App;