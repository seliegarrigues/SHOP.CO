import React from "react";
import Img1 from "../../assets/topSelling/chemise.png";
import Img2 from "../../assets/topSelling/tshirtcourage.png";
import Img3 from "../../assets/topSelling/jean-bermuda.png";
import Img4 from "../../assets/topSelling/jean-black.png";
import { FaStar } from "react-icons/fa";

export default function TopSelling() {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Vertical Striped Shirt",
      rating: 4.5,
      price: "$232",
      sold: "$212",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Courage graphic T-Shirt",
      rating: 3.5,
      price: "$145",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Loose Fit Bermuda Shorts",
      rating: 4.5,
      price: "$80",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      sold: "$210",
      aosDelay: "600",
    },
  ];

  return (
    <div>
      <div className="container px-4">
        {/* Header section*/}
        <div className="text-center max-w-[600px] mx-auto mb-24">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            TOP SELLING
          </h1>
        </div>
        {/* Body section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group w-full"
              key={data.id}
            >
              {/*image section*/}
              <div className="h-[250px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[250px] max-h-[250px] block mx-auto transform -translate-y-1/3 group-hover:scale-105 duration-300 drop-shadow-md object-cover rounded-md"
                />
              </div>
              {/*details section*/}
              <div className="p-4 text-center">
                {/* star rating*/}
                <div className="w-full flex items-center justify-center gap-1">
                  {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {data.rating % 1 !== 0 && <FaStar className="text-yellow-500" />}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {/* product description  */}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex items-center hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-gray">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
