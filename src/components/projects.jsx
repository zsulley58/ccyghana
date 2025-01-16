import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ongoing1 from "../assets/on-going-project1.jpg";
import ongoing2 from "../assets/on-going-project2.jpg";
import ongoing3 from "../assets/on-going-project3.jpg";
import completed1 from "../assets/completed-project1.jpg";
import completed2 from "../assets/completed-project2.jpg";
import completed3 from "../assets/completed-project3.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedIndex, setCompletedIndex] = useState(0);

  // Arrays to hold the images
  const ongoingProjects = [ongoing1, ongoing2, ongoing3];
  const completedProjects = [completed1, completed2, completed3];

  const handleNextOngoing = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ongoingProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevOngoing = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ongoingProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNextCompleted = () => {
    setCompletedIndex((prevIndex) =>
      prevIndex === completedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCompleted = () => {
    setCompletedIndex((prevIndex) =>
      prevIndex === 0 ? completedProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#00335b] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Ongoing Projects */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            {/* Left Arrow */}
            <button
              className="text-white text-4xl px-2"
              onClick={handlePrevOngoing}
            >
              <FaArrowLeft />
            </button>

            {/* Header Text in Between */}
            <h2 className="text-4xl font-extrabold text-white mx-2 font-big-shoulders">
              ONGOING PROJECTS
            </h2>

            {/* Right Arrow */}
            <button
              className="text-white text-4xl px-2"
              onClick={handleNextOngoing}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Image Slideshow */}
          <div className="flex justify-center gap-4">
            {ongoingProjects.map((project, index) => (
              <img
                key={index}
                src={project}
                alt={`Ongoing Project ${index + 1}`}
                className="w-1/3 h-64 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <div className="flex justify-between items-center mb-6">
            {/* Left Arrow */}
            <button
              className="text-white text-4xl px-2"
              onClick={handlePrevCompleted}
            >
              <FaArrowLeft />
            </button>

            {/* Header Text in Between */}
            <h2 className="text-4xl font-extrabold text-white mx-2 font-big-shoulders">
              COMPLETED PROJECTS
            </h2>

            {/* Right Arrow */}
            <button
              className="text-white text-4xl px-2"
              onClick={handleNextCompleted}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Image Slideshow */}
          <div className="flex justify-center gap-4">
            {completedProjects.map((project, index) => (
              <img
                key={index}
                src={project}
                alt={`Completed Project ${index + 1}`}
                className="w-1/3 h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
