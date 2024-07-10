// src/components/Hero.js
import React from "react";
import image1 from "../assets/hero/couple.png";
import twinkle from "../assets/hero/twinkle-black2.png";
const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
      }}
    >
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-sm">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Shop Now
                </button>
              </div>
              <div className="flex justify-between sm:justify-center mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">200+</h3>
                  <p className="text-sm">International Brands</p>
                </div>
                <div className="text-center border-l border-r border-gray-300 px-4">
                  <h3 className="text-3xl font-bold">2,000+</h3>
                  <p className="text-sm">High-Quality Products</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">30,000+</h3>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="order-1 sm:order-2">
              <div className="relative z-10">
              <img
                  src={twinkle}
                  alt="Twinkle"
                  className="absolute right-6 top-6 sm:top-8 sm:right-20"
                />
                <img
                  src={twinkle}
                  alt="Small Twinkle"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
