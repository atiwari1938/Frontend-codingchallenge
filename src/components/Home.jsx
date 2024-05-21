import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/image2.png';
import banner2 from '../assets/image1.jpg';
import banner3 from '../assets/image 3.jpg';

const Home = () => {
  return (
    <div>
        <hr/>
      <h1 style={{textAlign:'center',color:'#0d6efd'}}>Welcome to Doctor Management System</h1><br/>
      <p style={{textAlign:"center"}}>This is a system to manage doctors' information.</p>
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
          
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
         
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
          
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
