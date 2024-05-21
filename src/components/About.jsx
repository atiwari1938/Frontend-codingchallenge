import React from 'react';
import image from '../assets/img-2.png';
import '../styles/About.css';

const About = () => {
  return (
    
    <div class="about_section layout_padding">
    <hr/>
    <div >
      <div class="row">
        <div class="col-md-6">
          <div class="about_textt">
            <h4 class="about_text" >About</h4>
            <h1 class="highest_text">The Best in  health care</h1>
            <p class="style_text" style={{fontFamily:'cursive'}}>Welcome to our new website. We encourage you to find out more about the values and vision that guides us, the services and programs we offer, the indicators that ensure our continued accountability and transparency, and the news and events that matter most to you. It is the place where you will find information on career opportunities with HMH and be able to access general healthcare information to keep you well informed.
India Hospital has a proud tradition of care. For Last so many years, India Hospital has cared for the people of Lucknow, surrounding communities, and beyond, being a significant player within the District. Residing in the heart of a beautiful cottage country on the shores of the Gomti River, we offer healthcare not only to our community residents but to the many visitors who frequent our beautiful area year round.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="image_2" href="#"><img src={image} alt='image_2' style={{width:668,padding:34,marginTop:90}}></img></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;