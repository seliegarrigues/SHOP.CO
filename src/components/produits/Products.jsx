import React from "react";
import img1 from "../../assets/products/tshirt.png";
import img2 from "../../assets/products/jean.png";
import img3 from "../../assets/products/sheckeredshirt.png";
import img4 from "../../assets/products/sleeve-striped-tshirt.png";
import { LuStar } from "react-icons/lu";

const productsData = [
  {
    id: 1,
    img: img1,
    title: "T-shirt with Tape Details",
    rating: 4.5,
    author: "white",
    aosDelay: "0",
    discount: null,
    price: "$20.00",
  },
  {
    id: 2,
    img: img2,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    author: "red",
    aosDelay: "200",
    discount: "-20%",
    price: "$30.00",
  },
  {
    id: 3,
    img: img3,
    title: "Checkered Shirt",
    rating: 4.5,
    author: "brown",
    aosDelay: "400",
    discount: null,
    price: "$25.00",
  },
  {
    id: 4,
    img: img4,
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    author: "red",
    aosDelay: "600",
    discount: "-30%",
    price: "$35.00",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container px-4">
        {/* Header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            NEW ARRIVALS
          </h1>
        </div>
        {/* Body section*/}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {/* Card section */}
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 w-full"
              >
                {/*  product card content  */}
                <div className="relative">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[298px] w-full object-cover rounded-md"
                  />
                  {data.discount && (
                    <span className="absolute top-2 right-2 bg-red-500/75 text-white px-2 py-1 rounded-md">
                      {data.discount}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
                      <LuStar key={i} className="text-yellow-400" />
                    ))}
                    {data.rating % 1 !== 0 && (
                      <LuStar className="text-yellow-400" />
                    )}
                    <span>{data.rating}</span>
                  </div>
                  <p className="text-center text-lg font-bold">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  text-xs">
        <a href="https://www.figma.com/design/xIV9UIWpBXvqv9jCa89ZFW/E-commerce-Website-temp?node-id=0-1&t=pNfMQ1j7loPwIc2y-0">
          <button className=" hover:scale-105 duration-200  py-2 px-4 rounded-full shadow-sm ">
            View All
          </button>
        </a>
      </div>
    </div>
  );
};

export default Products;
