import React from "react";

const Projects = () => {
  // News Section Content with Stock Images
  const newsItems = [
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  return (
    <div className="bg-[#00335b] py-12 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 font-big-shoulders">
            POPULAR NEWS
          </h2>
        </div>

        {/* News Items Section in One Line */}
        <div className="flex justify-start gap-6 items-center overflow-x-auto mt-8">
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