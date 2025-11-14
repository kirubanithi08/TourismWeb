import React from 'react'
import Hero from '../components/Hero'
import AboutImage from "../assets/nattu-adnan-LUd-OghWPwc-unsplash.jpg";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
function About() {
  return (
    <>

 

        <Hero 
        
            cName="hero-about"
            heroimg="img"
            img={AboutImage}
            title="About"
            
        />



<AboutUs/>


<Footer/>


    </>
  )
}

export default About