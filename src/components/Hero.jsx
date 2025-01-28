import React from 'react';

const Hero = () => {
  return (
    <div className="w-full mx-auto px-6 py-12">
      {/* Huge Header */}
      <h1 className="text-6xl font-bold text-left mb-16" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
        NEWS & ANNOUNCEMENT
      </h1>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Four Containers (2 on each row) */}
        <div className="lg:w-2/3 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Container 1: Hospitality */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-white text-2xl font-bold bg-red-500 rounded-lg px-4 py-2 inline-block" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
                  HOSPITALITY
                </h2>
                <p className="text-lg text-gray-700 mt-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
                  commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
                </p>
                <img
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Hospitality"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <p className="text-lg text-gray-700">
                  Aenean accumsan, nisi at faucibus tincidunt, velit nulla lacinia libero, ac elementum mi libero vel sapien.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <span className="font-bold">John Doe</span> | <span>October 10, 2023</span>
                </div>
              </div>
            </div>

            {/* Container 2: Education */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-white text-2xl font-bold bg-red-500 rounded-lg px-4 py-2 inline-block" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
                  EDUCATION
                </h2>
                <p className="text-lg text-gray-700 mt-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
                  commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
                </p>
                <img
                  src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Education"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <p className="text-lg text-gray-700">
                  Aenean accumsan, nisi at faucibus tincidunt, velit nulla lacinia libero, ac elementum mi libero vel sapien.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <span className="font-bold">Jane Smith</span> | <span>October 9, 2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Container 3: Education */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-white text-2xl font-bold bg-red-500 rounded-lg px-4 py-2 inline-block" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
                  EDUCATION
                </h2>
                <p className="text-lg text-gray-700 mt-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
                  commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
                </p>
                <img
                  src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Education"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <p className="text-lg text-gray-700">
                  Aenean accumsan, nisi at faucibus tincidunt, velit nulla lacinia libero, ac elementum mi libero vel sapien.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <span className="font-bold">Alice Johnson</span> | <span>October 8, 2023</span>
                </div>
              </div>
            </div>

            {/* Container 4: Construction */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-white text-2xl font-bold bg-red-500 rounded-lg px-4 py-2 inline-block" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
                  CONSTRUCTION
                </h2>
                <p className="text-lg text-gray-700 mt-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
                  commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
                </p>
                <img
                  src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Construction"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <p className="text-lg text-gray-700">
                  Aenean accumsan, nisi at faucibus tincidunt, velit nulla lacinia libero, ac elementum mi libero vel sapien.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <span className="font-bold">Bob Brown</span> | <span>October 7, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Real Time Search and Recent Articles */}
        <div className="lg:w-1/3">
          {/* Real Time Search Header and Search Bar */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
            Real Time Search
          </h2>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Recent Articles Header */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
            Recent Articles
          </h2>

          {/* Recent Articles */}
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center">
                {/* Image Container */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-24 h-24">
                  <img
                    src={`https://images.pexels.com/photos/318430${index}/pexels-photo-318430${index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Article ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text on the Right */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold mb-1">Article Title {index}</h3>
                  <p className="text-sm text-gray-700 mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="font-bold">Author {index}</span> | <span>October {10 - index}, 2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Choose Categories Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
              Choose Categories:
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Today', 'Nature', 'Economy', 'Design', 'Explore', 'Travel'].map((category) => (
                <span key={category} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Video Container */}
          <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Video Header with Purple Background */}
            <div className="bg-purple-600 p-4">
              <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
                Featured Video
              </h2>
            </div>

            {/* Paragraph at the Top */}
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet cursus urna. Vivamus id felis at urna egestas
                commodo. Cras in nunc augue. Donec a nulla a nunc interdum aliquam.
              </p>
            </div>

            {/* Video */}
            <div className="p-6">
              <video
                className="w-full h-64 object-cover rounded-lg"
                controls
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Previous Button and Pagination */}
          <div className="mt-12 flex justify-between items-center">
            {/* Previous Button on the Left */}
            <button
              className="flex items-center justify-center bg-[#6c276b] text-white px-4 py-2 rounded-lg"
              style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}
            >
              <span className="mr-2">&#8592;</span> PREV
            </button>

            {/* Pagination in the Middle */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700">1</span>
              <span className="bg-[#6c276b] text-white px-3 py-1 rounded-lg">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;