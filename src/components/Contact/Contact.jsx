import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/call_icon.svg'

const Contact = () => {
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cd603302-e65c-4f65-bf21-5ec41d29429f");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
         alert(res.message);
      }
    };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
         <h1>Get in Touch</h1>

            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk!</h1>
                <p>I'm currently available to tackle and work on new projects, so feel free to send me a message. You can contact me anytime.</p>
                <div className="contact-details">
                <div className="contact-detail">
                   <img src={mail_icon} alt="" /><p>nathnaelmebratu1725@gmail.com || natnaelmebratu1725@gmail.com</p> 
                </div>
                <div className="contact-detail">
                   <img src={call_icon} alt="" /><p>+251944227868 || +251995404016</p> 
                </div>
                <div className="contact-detail">
                   <img src={location_icon} alt="" /><p>Nifas Silk Lafto, Addis Ababa, Ethiopia</p> 
                </div>
             </div>
        </div>
           <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Your Message</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button className="contact-submit">Submit Now</button>
           </form>
    </div>
    </div>
  )
}

export default Contact
