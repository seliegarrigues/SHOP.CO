import React from "react";
import { FaEnvelope } from "react-icons/fa";
import banner from "./../../assets/Rectangle-black 3.png";

export default function Subscribe() {
  const bannerImg = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className="flex mb-10 bg-gray-100 text-white"
      style={bannerImg}
    >
      <div className="container backdrop-blur-sm py-10 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-0">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email address"
              className="w-full p-3 pl-10 rounded-md"
            />
            <FaEnvelope className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>

          <button className="bg-white flex items-center hover:scale-105 duration-300 text-black px-4 rounded-full text-xs py-3">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
