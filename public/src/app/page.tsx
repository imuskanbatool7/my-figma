import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Signup from './components/Sign-up';
import Studio from './components/Studio';
import Footer from './components/Footer';
export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <Feature/>
    <Signup/>
    <Studio/>
    <Footer/>
   </div>
  );
}

