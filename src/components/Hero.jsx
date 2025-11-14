import React from 'react'
import "./HeroStyle.css"

function Hero(props) {
  return (
    <>
    
    <div className={props.cName}>
<img alt="Heroimg" className={props.heroimg} src={props.img}/>

<div className="hero-text">
<h1>{props.title}</h1>
<p>{props.text}</p>


  <a href={props.btnlink} className={props.btnClass}>{props.btn}</a>
 
    </div>
    </div>
    </>
  )
}

export default Hero;