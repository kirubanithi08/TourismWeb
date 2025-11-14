import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import React from 'react'


function Navbar() {

  const [hamIcon, sethamIcon] = useState(false);

  const handleClick = () => {
    sethamIcon(!hamIcon)
  }
  return (
    <nav className="NavbarItems">
      <h1 className="nav-logo">Trip</h1>

      <div className="ham-menu" onClick={handleClick}>

        <i className={!hamIcon ? "fas fa-bars" : "fas fa-times"}></i>

      </div>

      <ul className={!hamIcon ? "nav-menu" : "nav-menu active"}>

        {MenuItems.map((item, index) => {
          return (
            <li key={index}>

               <Link to={item.url} className={item.className}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
            
          )
        })}


      </ul>

    </nav>
  )
}

export default Navbar