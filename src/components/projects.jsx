import React from "react";
import ongoing1 from "../assets/on-going-project1.jpg";
import ongoing2 from "../assets/on-going-project2.jpg";
import ongoing3 from "../assets/on-going-project3.jpg";
import completed1 from "../assets/completed-project1.jpg";
import completed2 from "../assets/completed-project2.jpg";
import completed3 from "../assets/completed-project3.jpg";

const Projects = () => {
  // News Section Content
  const newsItems = [
    {
      image: ongoing3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: completed1,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: completed2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      image: completed3,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  return (
    <div className="bg-[#00335b] py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 font-big-shoulders">
            POPULAR NEWS
          </h2>
        </div>

        {/* News Items Section in One Line */}
        <div className="flex justify-start gap-6 items-center">
          {newsItems.map((item, index) => (
            <div className="flex items-center" key={index}>
              <img
                src={item.image}
                alt={`News ${index + 1}`}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <p className="text-white text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
