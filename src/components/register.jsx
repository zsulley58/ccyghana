import React from "react";
import membership from "../assets/membership.svg"; // Assuming logo is in assets
import { FaArrowRight } from "react-icons/fa"; // Ensure you have installed react-icons

const Register = () => {
  return (
    <div className="bg-[#8d0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="flex justify-center items-center mb-10">
          <img src={membership} alt="Membership Logo" className="w-8 h-8 mr-4" />
          <h2 className="text-4xl font-extrabold text-white uppercase font-big-shoulders">MEMBERSHIP</h2>
        </div>

        {/* Content Text */}
        <h2 className="text-3xl font-extrabold text-white mb-6 uppercase font-big-shoulders">
          PLEASE REGISTER FOR FREE TODAY TO JOIN THE FASTEST
          <br />
          GROWING COMMUNITY ORGANIZATION IN GHANA.
        </h2>
        <h2 className="text-xl font-extrabold text-white mb-6 uppercase font-big-shoulders">YENDI AGENDA.</h2>
        <h2 className="text-xl font-extrabold text-white mb-6 uppercase font-big-shoulders">YENDI FIRST...</h2>

        {/* Register Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-yellow-400">
            <span className="font-extrabold uppercase font-big-shoulders">REGISTER NOW</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
