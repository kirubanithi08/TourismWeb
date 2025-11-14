import React from 'react'
import Hero from '../components/Hero'
import AboutImage from "../assets/yusheng-deng-gNZ6MHqtsLY-unsplash.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service() {
  return (
    <>
        <Hero 
        
            cName="hero-about"
            heroimg="img"
            img={AboutImage}
            title="Service"
            
        />
  
        <Trip />

        <Footer/>
    </>
  )
}

export default Service