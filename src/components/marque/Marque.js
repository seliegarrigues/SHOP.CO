import React from 'react'
import banner from "./../../assets/Rectangle-black 3.png";
import logo1 from "./../../assets/marque/gucci-logo-1 1.png";
import logo2 from "./../../assets/marque/prada-logo.png";
import logo3 from "./../../assets/marque/versace-logo.png";
import logo4 from "./../../assets/marque/zara-logo.png"

export default function Marque() {
    const bannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

  return (
    <div  data-aos="zoom-in"
    className="mb-20 bg-gray-100 text-white"
    style={bannerImg}>
        <div className="container backdrop-blur-sm py-5 flex flex-wrap justify-between items-center px-4 sm:px-0">
            <img className="w-full sm:w-auto h-8 sm:h-10 my-1" src={logo1} alt="logo1" />
            <img className="w-full sm:w-auto h-8 sm:h-10 my-1" src={logo2} alt="logo2" />
            <img className="w-full sm:w-auto h-8 sm:h-10 my-1" src={logo3} alt="logo3" />
            <img className="w-full sm:w-auto h-8 sm:h-10 my-1" src={logo4} alt="logo4" />
        </div>
    </div>
  )
}
