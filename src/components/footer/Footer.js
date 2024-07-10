import React from "react";
import footerLogo from "../../assets/footer/SHOP.CO (copie).png";
import Banner from "../../assets/footer/Rectangle 1.png";
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
  FaGithub,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
  FaRegCopyright,
} from "react-icons/fa";

export default function Footer() {
  const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const footerLinks1 = [
    {
      title: "Customer Support",
      link: "/#contact",
    },
    {
      title: "Delivery Details",
      link: "/#login",
    },
    {
      title: "Terms & Conditions",
      link: "/#termcondition",
    },
    {
      title: "Privacy Policy",
      link: "/#privacypolicy",
    },
  ];
  const footerLinks2 = [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Features",
      link: "/#features",
    },
    {
      title: "Works",
      link: "/#works",
    },
    {
      title: "Career",
      link: "/#Career",
    },
  ];
  const footerLinks3 = [
    {
      title: "Account",
      link: "/#login",
    },
    {
      title: "Manage Deliveries",
      link: "/#managedeliveries",
    },
    {
      title: "Order",
      link: "/#login",
    },
    {
      title: "Payments",
      link: "/#termcondition",
    },
  ];
  const footerLinks4 = [
    {
      title: "Free eBooks",
      link: "/#ebooks",
    },
    {
      title: "development Tutorial",
      link: "/#",
    },
    {
      title: "How to -Blog",
      link: "/#blog",
    },
    {
      title: "Youtube PLaylist",
      link: "/#youtube",
    },
  ];
  return (
    <div style={bannerImg}>
      <div className="container">
        <div className="flex flex-wrap">
          {/* Company details */}
          <div className="py-8 px-4 w-full md:w-1/4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
            </h1>
            <p>
              We have clothes that suits your style and which you're proud to
              wear, from women to men.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Footer links */}
          <div className="flex flex-wrap w-full md:w-3/4">
            <div className="w-full md:w-1/4">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks1.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  HELP
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks2.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  FAQ
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks3.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  RESOURCES
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks4.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* useful */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          <div className="flex flex-wrap justify-between items-center text-xs">
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Shop.Co</p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCopyright />
              <p>2000-2023 All Rights Reserved</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <SiVisa className="text-3xl" />
              </a>
              <a href="#">
                <RiMastercardFill className="text-3xl" />
              </a>
              <a href="#">
                <FaCcPaypal className="text-3xl" />
              </a>
              <a href="#">
                <FaApplePay className="text-3xl" />
              </a>
              <a href="#">
                <FaGooglePay className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
