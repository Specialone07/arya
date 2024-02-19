import React from "react";
import footer from "./footer.PNG";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-700">
        {/* Logo and About */}
        <div className="flex flex-col gap-4">
          <div>
            <img className="h-50 w-auto" src={footer} alt="Footer" />
          </div>
          <p className="leading-8 text-lg">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#131414] font-bold text-2xl">
            Aarya Trading L.L.C
          </h1>
          <ul className="flex flex-col gap-3">
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
        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1b1d1d] font-bold text-2xl">Legals</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="support">Support</Link>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#191b1b] font-bold text-2xl">Follow Us</h1>

          <div className="flex flex-col gap-4">
            <ul className="flex gap-4">
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
      <div className="mt-8 flex items-center justify-center text-red">
        <p>Copyright ©️2024 Conscious Tech. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
