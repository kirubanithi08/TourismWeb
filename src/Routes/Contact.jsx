import React from 'react'

import Hero from '../components/Hero'
import AboutImage from "../assets/2h-media-oUw0fIRzhr4-unsplash.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
   <>
        <Hero 
        
            cName="hero-about"
            heroimg="img"
            img={AboutImage}
            title="Contact"
            
        />

        <ContactForm/>

        <Footer/>
    </>
  )
}

export default Contact