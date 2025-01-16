import React from 'react';

const Comp = () => {
  return (
    <div className="bg-[#8d0f1a] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Mission Box */}
        <div className="w-full lg:w-1/2 relative">
          <h3 className="text-2xl font-extrabold text-white mb-2 pl-5 text-center">OUR MISSION</h3> {/* Header outside the box */}
          <div className="bg-[#00335b] rounded-xl absolute right-0 bottom-0 w-full h-[19rem] translate-x-2 translate-y-2 z-0"></div> {/* Background box */}
          <div className="bg-white rounded-xl p-[7rem] relative z-10">
            <p className="text-center text-gray-700">
              Our mission is to deliver quality services and empower communities to achieve their goals through innovative solutions.
            </p>
          </div>
        </div>

        {/* Vision Box */}
        <div className="w-full lg:w-1/2 relative">
          <h3 className="text-2xl font-extrabold text-white mb-2 pl-5 text-center">OUR VISION</h3> {/* Header outside the box */}
          <div className="bg-[#00335b] rounded-xl absolute right-0 bottom-0 w-full h-[19rem] translate-x-2 translate-y-2 z-0"></div> {/* Background box */}
          <div className="bg-white rounded-xl p-[7rem] relative z-10">
            <p className="text-center text-gray-700">
              Our vision is to be a leading provider of technology solutions, shaping a future of sustainability and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
