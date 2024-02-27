import React from "react";
import tally from "./tally.png";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-100 py-6 sm:py-10 mt-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-[25%_50%_25%] text-slate-700 justify-between">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-black font-semibold">
              Tally Prime Silver Partner
            </h1>
            <div className="flex justify-center">
              <img className="h-20 w-auto mr-10 " src={tally} alt="Footer" />
            </div>
            <p className="leading-6 text-sm sm:text-[10px] text-black font-semibold">
              We sell Tally Prime software with its customized features
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex gap-8 flex-col  sm:flex-row">
            <div
              className="flex flex-col gap-4"
              style={{ height: "150px", width: "300px" }}
            >
              <h1 className="text-[#1b1d1d] font-bold  sm:text-xl">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2 sm:gap-3 text-black font-semibold">
                <li>
                  <Link to="about">About Us</Link>
                </li>
                <li>
                  <Link to="services">Our Services</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Our Services */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[#1b1d1d] font-bold text-lg sm:text-xl">
                Our Services
              </h1>
              <ul className="flex flex-col gap-2 sm:gap-3 text-black font-semibold">
                <li>
                  <Link to="web">Web Designing and Development</Link>
                </li>
                <li>
                  <Link to="ecom">Ecommerce Management</Link>
                </li>
                <li>
                  <Link to="graphic">Graphics Designing</Link>
                </li>
                <li>
                  <Link to="apps">Application Development</Link>
                </li>
                <li>
                  <Link to="dm">Digital Marketing and Branding</Link>
                </li>
                <li>
                  <Link to="business">Business Email Setup</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div
            className="flex flex-col gap-4   items-center"
            // style={{ height: "150px", width: "150px" }}
          >
            <h1 className="text-[#191b1b] font-bold text-lg sm:text-xl">
              Follow Us
            </h1>
            <div className="flex flex-col gap-2 sm:gap-4">
              <ul className="flex gap-2 sm:gap-4">
                <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                  <Link>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center text-red text-sm sm:text-base">
          <p>Copyright ©️2024 Conscious Tech. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
