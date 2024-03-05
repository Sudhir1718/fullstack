import React from 'react';
import Navbar from './navbar'; // Assuming you have the Navbar component defined
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '/src/assets/images/www.viratsudhir@gmail.com.gif';
// import img2 from '../../src/assets/images/yo2.jpg';
// import img3 from '../../src/assets/images/yo3.jpg';
import '../assets/css/home.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <div className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Welcome to our kxv! Yoga Admission Center</h1>
            <h2 className="subtitle has-text-centered">Start your yoga journey with us today!</h2>
            <div className="columns is-centered">
              <div className="column is-half">
                {/* Image inserted here */}
              <center>  <img src={img1} alt="Yoga Image" style={{ width: '50%', height: '50vh' }} /></center>
                <div className="box">
                  <h3 className="title is-3">Why Choose Us?</h3>
                  <p>We offer a variety of yoga classes suitable for all levels, from beginners to advanced practitioners.</p>
                  <p>Our experienced instructors will guide you through every step of your yoga journey.</p>
                  <p>Join our community and experience the physical, mental, and spiritual benefits of yoga.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2024 Yoga Admission Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
