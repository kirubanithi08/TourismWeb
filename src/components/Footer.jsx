import "./FooterStyle.css"

import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div className="">
                <h1>trip</h1>
                <p className="sub-head">Choose your favourite destination.</p>
            </div>

<div>
    <a href="/">
    <i className="fa-brands fa-facebook-square"></i>
    </a>
    <a href="/">
    <i className="fa-brands fa-instagram-square"></i>
    </a>
    <a href="/">
    <i className="fa-brands fa-youtube-square"></i>
    </a>
    <a href="/">
    <i className="fa-brands fa-twitter-square"></i>
    </a>
</div>

        </div>
        <div className="bottom">
            <div>
                <h4>project</h4>
            <a href="/">Changelog</a>
              <a href="/">Status</a>
                <a href="/">License</a>
                  <a href="/">All Version</a>
            </div>
             <div>
                <h4>Community</h4>
            <a href="/">GitHub</a>
             <a href="/">Issues</a>
              <a href="/">Project</a>
                <a href="/">Twitter</a>
                
            </div>
             <div>
                <h4>Help</h4>
            <a href="/">Support</a>
              <a href="/">TroubleShooting</a>
                <a href="/">Contact Us</a>
                 
            </div>
             <div>
                <h4>Others</h4>
            <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                  
            </div>
        </div>
    </div>
  )
}

export default Footer

