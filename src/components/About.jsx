import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Assuming you have the image in your assets folder

const About = () => {
  return (
    <div className="bg-[#615f53] py-10"> {/* Increased padding for better spacing */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 rounded-2xl overflow-hidden"> {/* Added overflow-hidden to clip the corners */}
          <img 
            src={assets['about_us_hero']} 
            alt="About Us" 
            className="w-[26rem] max-h-[28rem] object-cover border-4 border-white rounded-2xl" // Set max-height to limit image height
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-white pl-10%"> {/* Added pl-5 for padding to left */}
          {/* Header with custom font and extra bold weight */}
          <h2 
            className="text-white font-bold inline-block" // Inline-block keeps the underline only beneath the text
            style={{
              height: '6rem',
              fontSize: '2rem', // Adjust font size for 50% height
              fontFamily: 'Big Shoulders Display, ExtraBold', // Set font
            }}
          >
            ABOUT US
            <div className="border-b-8 border-white mt-1"></div> {/* Thicker underline */}
          </h2>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
            commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam. Aenean accumsan, nisi at faucibus tincidunt, 
            velit nulla lacinia libero, ac elementum mi libero vel sapien.
          </p>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
            commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam. Aenean accumsan, nisi at faucibus tincidunt, 
            velit nulla lacinia libero, ac elementum mi libero vel sapien.
          </p>

          {/* Learn More Button with Arrow */}
          <div className="mt-6 flex items-center gap-2">
            <Link to="/about" className="bg-yellow-400 text-gray-950 py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 flex items-center">
              Learn More
              {/* Right-pointing arrow */}
              <span className="ml-2">
                &rarr; {/* You can replace this with an SVG or an image */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


