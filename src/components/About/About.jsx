import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>My educational background, coupled with my continuous drive for learning and improvement, positions me well to excel in the field of frontend design.</p>
                <p>Throughout my academic journey, I have developed a deep understanding and appreciation for user experience, technology, and design. </p>
            </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML and CSS</p><hr style={{width:"50%"}}/> </div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/> </div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/> </div>
            <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}}/> </div>
            <div className="about-skill"><p>Wix</p><hr style={{width:"80%"}}/> </div>

        </div>
        </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Wix</h1>
                <p>Certified Wix developer</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>CSS</h1>
                <p>Certified in CSS</p>
                
            </div>
            <hr />
            <div className="about-achievement">
                <h1>School</h1>
                <p>Graduated with Honors</p>
                
            </div>
            <hr />
        </div>

    </div>
  )
}

export default About
