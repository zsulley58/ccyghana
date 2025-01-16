import React from 'react';

const Executives = () => {
  // Sample data for executives
  const executives = [
    { name: 'Executive1', imgSrc: 'path/to/image1.jpg' },
    { name: 'Executive2', imgSrc: 'path/to/image2.jpg' },
    { name: 'Executive3', imgSrc: 'path/to/image3.jpg' },
    { name: 'Executive4', imgSrc: 'path/to/image4.jpg' },
  ];

  return (
    <div className="bg-[#615f53] py-10">
      <div className="max-w-7xl mx-auto px-6">
      <h1 
            className="text-white font-bold flex items-center justify-center "
            style={{

              height: '6rem',
              fontSize: '2rem', // Adjust font size for 50% height
              fontFamily: 'Big Shoulders Display, ExtraBold' // Set Times New Roman font
            }}
          >
            OUR EXECUTIVE
          </h1>

        <div className="flex justify-center gap-10">
          {executives.map((exec, index) => (
            <div key={index} className="text-center">
              <img
                src={exec.imgSrc}
                alt={exec.name}
                className="w-[15rem] h-[15rem] rounded-full object-cover border-8 border-white"
              />
              <p className="mt-2 text-white font-semibold">{exec.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Executives;
