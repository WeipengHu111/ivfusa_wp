// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Nathan from './components/Nathan';
import Note from './components/Note';
import Sliders from './components/Sliders';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Doctors from './components/Doctors';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import Map from './components/Map';
import Blank_burger from './components/Blog_example/Blank_burger';
import Navbar_Blog from './components/navbar_components/Navbar_Blog'; 

function App() {
  return (
    <Router>
      <div className='text-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Sliders />
            <Nathan />
            <Note />
            <Partners />
            <Doctors />
            <Feature />
            <Process />
            <Cards />
            <FAQ />
            <Newsletter />
            <Timeline />
            <Blog />
            {/* <Map /> */}
          </>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Navbar_Blog" element={<Navbar_Blog />} /> 
          <Route path="/Blog_example/Blank_burger/:id" element={<Blank_burger />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
