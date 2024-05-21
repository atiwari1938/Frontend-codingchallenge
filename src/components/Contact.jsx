// Contact.js

import React from 'react';
import contactImage from '../assets/img1.png';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact_section layout_padding">
      <div className="container-fluid">
        <h2>Contact Us</h2>
        <p className="description">
          Hospitals is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the form given below and we will get back to you.
        </p>
        <div className="contact_form_wrapper">
          <fieldset className="contact_form">
            <legend>Contact Details</legend>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </div>
        <div className="contact_image">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
