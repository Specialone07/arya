import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import Link, NavLink, and useLocation from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons
import logo from "./aarya.png";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Get the current location using useLocation hook
  const location = useLocation();

  // Function to handle navigation item click on mobile
  const handleNavItemClick = () => {
    setNav(false); // Close the mobile navigation menu
  };

  // Array containing navigation items with their respective links
  const navItems = [
    { id: 1, text: "Services", link: "/services" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-none flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-bold">
      {/* Logo */}
      <Link to="/"> {/* Link to main homepage */}
        <img src={logo} alt="Logo" className="w-12 h-auto" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center justify-center flex-grow">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 hover:bg-[#5e71af] rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${
              location.pathname === item.link ? "bg-[#b367a7] text-black font-semibold" : ""
            }`}
          >
            <NavLink to={item.link} className="px-2 py-1 rounded-md">
              {item.text}
            </NavLink>{" "}
            {/* Use NavLink for navigation */}
          </li>
        ))}
      </ul>
      
      {/* Social Icons */}
      <div className="flex justify-end ml-auto">
        <FaFacebook className="text-xl mx-2" />
        <FaTwitter className="text-xl mx-2" />
        <FaInstagram className="text-xl mx-2" />
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img src={logo} alt="Logo" className="w-12 h-auto m-4" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className={` p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 ${
              location.pathname === item.link ? "bg-[#00df9a] text-white" : ""
            }`}
            onClick={handleNavItemClick} // Handle click on navigation item
          >
            <Link to={item.link}>{item.text}</Link>{" "}
            {/* Use Link for navigation */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
