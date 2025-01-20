import React from 'react';
import { assets } from '../assets/assets'; // Make sure the import path is correct

const Hero = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div>
        <img 
          src={assets.completedProject1} // Correct the asset reference to match the export key
          alt="Completed Project"
          style={{
            width: '100%', // Ensures the image takes up 100% width
            height: 'auto', // Maintains the aspect ratio of the image
            display: 'block', // Removes extra space below the image
            
          }} 
        />
      </div>

      {/* Hero Text Section */}
      {/* You can add any text or content you need here */}
    </div>
  );
};

export default Hero;
