import React from 'react';
import { assets } from '../assets/assets'; // Make sure to import assets here

const Comp = () => {
  return (
    <div className="bg-[#8d0f1a] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Our Accomplishments Header */}
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">OUR ACCOMPLISHMENTS</h2>
        <p className="text-white text-lg text-center mb-10">
          We have achieved significant milestones that showcase our growth, impact, and commitment to excellence.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* First Box */}
          <div className="h-[35em] lg:w-[25em] flex flex-col items-center">
            <div className="bg-white rounded-xl overflow-hidden flex-1">
              <img
                src={assets.completedProject1} // Now using the imported asset
                alt="236 Achievements"
                className="w-full h-[50%] object-cover"
              />
              <p className="text-lg">Achievement so Far</p>
            </div>
            <div className="text-white text-center mt-4">
              <h4 className="text-2xl font-bold">236</h4>
              <p className="text-lg">Achievement so Far</p>
            </div>
          </div>

          {/* Second Box */}
          <div className="h-[35em] lg:w-[25em] flex flex-col items-center">
            <div className="bg-white rounded-xl overflow-hidden flex-1">
              <img
                src={assets.completedProject1} // Now using the imported asset
                alt="236 Achievements"
                className="w-full h-[50%] object-cover"
              />
              <p className="text-lg">Achievement so Far</p>
            </div>
            <div className="text-white text-center mt-4">
              <h4 className="text-2xl font-bold">173</h4>
              <p className="text-lg">Members</p>
            </div>
          </div>

          {/* Third Box */}
          <div className="h-[35em] lg:w-[25em] flex flex-col items-center">
            <div className="bg-white rounded-xl overflow-hidden flex-1">
              <img
                src={assets.completedProject1} // Now using the imported asset
                alt="236 Achievements"
                className="w-full h-[50%] object-cover"
              />
              <p className="text-lg">Achievement so Far</p>
            </div>
          
            <div className="text-white text-center mt-4">
              <h4 className="text-2xl font-bold">69</h4>
              <p className="text-lg">Om-going projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
