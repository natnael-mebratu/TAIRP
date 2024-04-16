import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
const Hero = () => {
  return (
   <div id='home' className="hero">
    <img src={profile_img} alt="profile" />
    <h1><span>I'm Natnael Mebratu,</span> A Computer Scientist and Certified Wix Developer Based In Ethiopia</h1>
    <p>I'm a frontend developer from Ethiopia, that graduated with honors. I bring a solid foundation in technology and design principles. 
        I am constantly engaged with the latest design research and innovation, which allows me to stay ahead of emerging trends and best practices. 
        Additionally, my commitment to continuous learning ensures that I am always seeking new knowledge and skills to enhance my abilities. </p>
    <div className="hero-action">
        <div className="hero-connect">
            Connect With Me
        </div>
        <div className="hero-resume">
            My resume
        </div>
    </div>
   </div>
  )
}

export default Hero
