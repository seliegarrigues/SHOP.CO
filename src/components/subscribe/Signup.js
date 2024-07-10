import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import banner from "./../../assets/Rectangle-black 3.png";

export default function Signup() {
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
      className="mb-20 bg-gray-100 text-white relative"
      style={bannerImg}
    >
      <div className="container backdrop-blur-sm py-5">
        <div className="space-y-6 max-w-xl mx-auto">
          <p className="!text-center text-xs sm:text-left sm:text-s font-semibold">
            Sign up and get 20% off to your first order, <span className="underline">Sign up Now</span>
          </p>
        </div>
      </div>
      <button className="absolute top-0 right-0 m-4 text-white">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
