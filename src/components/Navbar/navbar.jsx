import React from "react";
import logo from "./aarya.png";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-#ddd6fe py-4 px-10 mt-4 flex items-center justify-between">
      <div className="ml-4">
        <Link to="/">
          <img src={logo} alt="" className="h-10 w-12" />
        </Link>
      </div>
      <div className="flex space-x-10 dark:text-black font-Roboto font-xl">
        <Link to="/about" className="hover:text-red-600">
          About Us
        </Link>
        <Link to="/services" className="hover:text-red-600">
          Our Services
        </Link>
        <Link to="/contact" className="hover:text-red-600">
          Contact Us
        </Link>
      </div>
      <div className="flex space-x-5">
        <Link to="/tiktok" className="flex items-center">
          <FaTiktok className="mr-2" />
        </Link>
        <Link to="/instagram" className="flex items-center">
          <FaInstagram className="mr-2" />
        </Link>
        <Link to="/facebook" className="flex items-center">
          <FaFacebook className="mr-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
