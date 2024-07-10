//src/components/Navbar.js
import React from "react";
import { LuMenu } from "react-icons/lu";
import Logo from "../assets/Logo.png";
import { LuChevronDown } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { LuUserCircle2 } from "react-icons/lu";

const Menu = [
  {
    id: 1,
    name: "Shop",
    link: "/#",
  },
  {
    id: 2,
    name: "On Sale",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Selling",
    link: "/#",
  },
  {
    id: 4,
    name: "New Arrivals",
    link: "/#",
  },
  {
    id: 5,
    name: "Brands",
    link: "/#",
  },
];

const dropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Pre-order",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div
      className="shadow-mg bg-white
    duration-200 relative z-40"
    >
      {/*  Navbar */}
      <div className="bg-primary/40 py-2">
        <div
          className="container flex
        justify-between items-center"
        >
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <LuMenu className="w-10" />
            </a>
          </div>
          <div>
            <a href="#" className="text-xl sm:text-2xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              SHOP.CO
            </a>
          </div>
          {/*lower Navbar*/}
          <div className="flex justify-between items-center gap-4">
            <ul
              className="sm:flex hidden items-center
         gap-4"
            >
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200 text-sm"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Simple Dropdown and links*/}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                  <span>
                    <LuChevronDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div
                  className="absolute z-[9999] hidden
            group-hover:block w-[150px] rounded-md bg-white 
            p-2 text-black shadow-md"
                >
                  <ul>
                    {dropDownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full 
                    rounded-md p-2
                    hover:bg-primary/20 "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/*search bar */}
            <div
              className=" relative group hidden 
            sm:block"
            >
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-primary/40 w-[200px] sm:w-[200px]
              group-hover:w-[300px] transition-all
              duration-300 rounded-full border
              border-black-300 px-2 py-1
              focus: outline-none focus: border-1
              focus: border-primary"
              />
              <LuSearch
                className="text-gray-500
              group-hover:text-primary absolute
              top-1/2 -translate-y-1/2 left-3 w-10"
              />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className=" transition-all duration-200
            py-1 px-4 rounded-full flex 
            items-center gap-3 group"
          >
            <span
              className="group-hover:block
            hidden transition-all duration-200"
            >
              Buy Now
            </span>
            <FaCartShopping
              className=" w-10 text-xl drop-shadow-sm
              cursor-pointer"
            />
          </button>
          {/*user*/}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <LuUserCircle2 className="w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
