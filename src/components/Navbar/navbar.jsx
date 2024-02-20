import React, { useState, useEffect } from "react";
import logo from "./aarya.png";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 px-6 md:px-10 sticky top-0 z-10 ${
        scrolling ? "bg-gray-200" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-10 w-12" />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-10 dark:text-black font-Roboto font-xl`}
        >
          <Link
            to="/about"
            className="hover:text-red-600 block md:inline-block"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-red-600 block md:inline-block"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-600 block md:inline-block"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex space-x-5">
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
      </div>
    </nav>
  );
};

export default Navbar;
