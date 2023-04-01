import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        The Agriculture Business Blog is a platform for agribusiness owners to learn from each other, exchange best practices, and access relevant information and resources to help them succeed. We cover a wide range of topics, from crop and livestock farming to marketing and distribution, from funding and investment to policy and regulations.
      </p>
      <p className="about-us-description">
        Our team consists of experienced professionals with a deep understanding of the agriculture sector in Nigeria. We are passionate about helping agribusiness owners overcome the challenges they face and achieve their full potential.
      </p>
      <h2 className="about-us-subtitle">Our Mission</h2>
      <p className="about-us-description">
        Our mission is to build a community of agribusiness owners who are passionate about improving their businesses and contributing to the development of Nigeria's agriculture sector. We believe that by sharing knowledge and best practices, we can create a more sustainable and prosperous future for everyone involved in agriculture.
      </p>
      <h2 className="about-us-subtitle">Our Vision</h2>
      <p className="about-us-description">
        Our vision is to be the leading platform for agribusiness owners in Nigeria, providing them with the resources, knowledge, and connections they need to succeed. We want to create a vibrant and supportive community that drives innovation and growth in the agriculture sector.
      </p>
    </div>
  );
};

export default AboutUs;
