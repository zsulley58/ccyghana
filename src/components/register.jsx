import React from "react";
import membership from "../assets/membership.svg"; // Assuming logo is in assets
import { FaArrowRight } from "react-icons/fa"; // Ensure you have installed react-icons

const Register = () => {
  return (
    <div className="bg-white py-20">
      {/* New Section for Contact */}
      <div 
        className="bg-[#615f53] py-20 mt-10 h-[37rem] w-[90rem] rounded-xl mx-auto flex justify-center items-center" 
        // Adjust roundness by changing "rounded-3xl" to "rounded-lg" (less rounded) or "rounded-full" (fully rounded)
      >
        <div className="w-3/4 max-w-md px-6 text-center text-white">
          {/* Contact Header */}
          <h2 className="text-2xl font-extrabold uppercase mb-10">
            Please Contact Us If You Are Interested In Working For Us.
          </h2>
          <p>
            Please Contact Us If You Are Interested In Working For Us.gkfjgkfdfdgfdgfgpdfgdfpgdfgogdgdpfdpdf
          </p>
          

          {/* Contact Button */}
          <div className="mt-10 flex justify-center">
            <button 
              className="bg-white text-black py-3 px-6 rounded-l hover:bg-gray-200"
              // Adjust button roundness by changing "rounded-2xl" to "rounded-lg" or "rounded-full"
            >
              <span className="font-extrabold uppercase">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
