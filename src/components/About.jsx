import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="mx-auto px-6 pt-10 w-[100%]">
      
      {/* Main Container: Image, Content, and Mission, Vision, Narratives Sections */}
      <div className="flex flex-col lg:flex-row items-center shadow-lg rounded-lg h-auto w-full">
        
        {/* Image Section (on the left) */}
        <div className="lg:w-1/2 w-full h-full rounded-2xl overflow-hidden">
          <img
            src={assets['about_us_hero']}
            alt="About Us"
            className="w-full h-full object-cover border-4 border-white rounded-2xl"
          />
        </div>

        {/* Content Section (on the right) */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 text-gray-800 pl-10">
          
          {/* About Us Section */}
          <h2
            className="text-black font-bold inline-block"
            style={{
              height: '6rem',
              fontSize: '2rem',
              fontFamily: 'Big Shoulders Display, ExtraBold',
            }}
          >
            ABOUT US
          </h2>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
            commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
          </p>
          <p className="text-lg mt-4">
            Aenean accumsan, nisi at faucibus tincidunt, velit nulla lacinia libero, ac elementum mi libero vel sapien. Nullam nec
            dui eu purus vehicula consequat.
          </p>
          
          {/* Our History Section */}
          <h2
            className="text-black font-bold inline-block mt-8"
            style={{
              height: '6rem',
              fontSize: '2rem',
              fontFamily: 'Big Shoulders Display, ExtraBold',
            }}
          >
            OUR HISTORY
          </h2>
          <p className="text-lg mt-10">
            Our history is rooted in a passion for road safety. We started with a small team and a big dream to improve the safety
            of our citizens. Over the years, we've grown and made significant strides in raising awareness about road safety.
          </p>
          <p className="text-lg mt-4">
            We have worked with various organizations and governments to create impactful programs. Our team continues to expand its
            reach and influence, making strides towards a safer future for everyone.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Narratives Section within the Main Container */}
      <div className="mt-20 text-center flex justify-between w-full">
        
        {/* Mission Icon and Title */}
        <div className="text-center">
          <div className="text-gray-600 text-5xl mb-4">
            <i className="fas fa-bullseye"></i> {/* Mission Icon */}
          </div>
          <h3 className="text-xl font-bold text-black">MISSION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna.</p>
        </div>

        {/* Vision Icon and Title */}
        <div className="text-center">
          <div className="text-gray-600 text-5xl mb-4">
            <i className="fas fa-eye"></i> {/* Vision Icon */}
          </div>
          <h3 className="text-xl font-bold text-black">VISION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna.</p>
        </div>

        {/* Narratives Icon and Title */}
        <div className="text-center">
          <div className="text-gray-600 text-5xl mb-4">
            <i className="fas fa-quote-right"></i> {/* Narratives Icon */}
          </div>
          <h3 className="text-xl font-bold text-black">NARRATIVES</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna.</p>
        </div>
      </div>
    </div>
  );
};

export default About;