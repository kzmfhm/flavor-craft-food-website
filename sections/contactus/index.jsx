import React from 'react'
import './style.css'

const ContactUs = () => {
  return (
    <div>
   
        <div className="contact">
       <div className="content">
        <h2>Contact US</h2>
        <p>We would love to hear from you!</p>
      </div>
      <div id="contactus-container" className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i><img src="svg/map.svg" alt="map-gif" /></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Flavor Craft Restaurant, <br /> Lahore,
                100095
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="icon1"><img src="svg/contact.svg" alt="contact" /></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+92 098XXXXX</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i><img src="svg/mail.svg" alt="email-gif" /></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>flavorcraft@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type Your Message ...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default ContactUs