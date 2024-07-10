import React from "react";
import categoriesImg1 from "../../assets/categories/casual.png";
import categoriesImg2 from "../../assets/categories/formal.png";
import categoriesImg3 from "../../assets/categories/party.png";
import categoriesImg4 from "../../assets/categories/sport.png";

export default function Categories() {
  return (
    <div className="min-h-[550px] flex flex-col justify-center items-center py-12 sm:py-0">
      <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-center mb-8">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="container bg-gray-100 rounded-2xl p-8 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div data-aos="zoom-in" className="relative">
            <img
              src={categoriesImg1}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <p className="absolute top-2 left-2 text-sm text-gray-500 tracking-wide leading-5">
              Casual
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div data-aos="zoom-in" className="relative">
            <img
              src={categoriesImg2}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <p className="absolute top-2 left-2 text-sm text-gray-500 tracking-wide leading-5">
              Formal
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div data-aos="zoom-in" className="relative">
            <img
              src={categoriesImg3}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <p className="absolute top-2 left-2 text-sm text-gray-500 tracking-wide leading-5">
              Party
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div data-aos="zoom-in" className="relative">
            <img
              src={categoriesImg4}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <p className="absolute top-2 left-2 text-sm text-gray-500 tracking-wide leading-5">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
