import React from 'react'
import './footer.css';
import gpt3Logo from'../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
         <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="logo" />
        <p>lagos okota greenfield emeka nzom str, All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>overons</p>
        <p>social media</p>
        <p>counters</p>
        <p>contacts</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & conditions</p>
        <p>Privacy Policy</p>
        <p>contacts</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>28 emeka nzom street greenfield okota</p>
        <p>08136044960</p>
        <p>contact</p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>2021 GPT-3, All rights reserved</p>
    </div>
  </div>
  )
}

export default Footer