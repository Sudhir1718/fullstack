import React from 'react';
import Navbar from './navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yogaImage1 from "/src/assets/images/p1.jpg";
import yogaImage2 from "/src/assets/images/p5.png";
import yogaImage3 from "/src/assets/images/p3.png";
import '/src/assets/css/academy.css';
import { Link } from 'react-router-dom';

const YogaCenter = () => {
  return (
    <div>
      <Navbar />
        <div className='image'>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000} showThumbs={false}>
        <div>
          <img src={yogaImage1} alt="Yoga 1" />
        </div>
        <div>
          <img src={yogaImage2} alt="Yoga 2" />
        </div>
        <div>
          <img src={yogaImage3} alt="Yoga 3" />
        </div>
      </Carousel>
        </div>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Academy Yoga Center</h1>
          <p>Begin your journey to wellness and tranquility with us.</p>
        <Link to='/class'>
          <a  className="btn">Explore Classes</a></Link>
        </div>
      </div>
      <div className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>We are dedicated to providing a peaceful and supportive environment for individuals to explore the practice of yoga. Our experienced instructors offer classes suitable for all levels, from beginners to advanced practitioners.</p>
          <p>Join our community and experience the physical, mental, and spiritual benefits of yoga.</p>
        </div>
      </div>
      <div className="features-section">
        <div className="container">
          <h2>Our Features</h2>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Experienced Instructors</h3>
            <p>Our instructors are highly trained and experienced to guide you through your yoga journey.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Wellness Focus</h3>
            <p>We prioritize your well-being and focus on promoting holistic health through yoga.</p>
          </div>
          <div className="feature">
            <i className="fas fa-balance-scale"></i>
            <h3>Balance & Harmony</h3>
            <p>Find balance and harmony in your life through the practice of yoga at our center.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content">
          <p>&copy; 2024 Academy Yoga Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default YogaCenter;
