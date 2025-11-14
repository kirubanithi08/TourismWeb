import React from 'react'
import Hero from '../components/Hero'
import homeImage from "../assets/home.jpg";
import "./HomeStyle.css"
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home() {
  return (
    <>

 {/* <Navbar /> */}

<Hero 

    cName="hero"
    heroimg="img"
    img={homeImage}
    title="Your Journy Your Story"
    text="Choose Your Favorite Destination"
    btnlink="/"
    btn="Travel Plan"
    btnClass="show"

/>

<Destination/>

<Trip/>


<Footer/>

   </>
  )
}

export default Home