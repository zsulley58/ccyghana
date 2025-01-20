// pages/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-5">About Us</h1>
      <p className="text-lg text-center mb-5">
        Welcome to <span className="text-red-500">THE CONCERNED CITIZENS OF YENDI</span>.
        We are a group of passionate individuals committed to the well-being and progress of the Yendi community. 
        Our mission is to promote awareness, provide support, and drive positive change through various initiatives.
      </p>
      
      <h2 className="text-2xl font-semibold text-center mb-3">Our Vision</h2>
      <p className="text-md text-center mb-8">
        Our vision is to create a better, more informed community by working together to tackle issues that matter to the people of Yendi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <ul className="list-disc list-inside text-left">
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Accountability</li>
            <li>Respect for Diversity</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">Our Goals</h3>
          <ul className="list-disc list-inside text-left">
            <li>Enhance community engagement and awareness</li>
            <li>Support social causes and initiatives</li>
            <li>Foster collaboration among citizens</li>
            <li>Promote transparency in local governance</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-lg">Thank you for your interest in our mission. We invite you to join us in making a difference!</p>
      </div>
    </div>
  );
};

export default AboutUs;
