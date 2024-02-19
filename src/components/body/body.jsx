import React from "react";
import bg from "./bg.png";
import { FaArrowRight } from "react-icons/fa";
import Button from "../button/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="min-h-[70vh] 800px:min-h-[80vh] bg-[#4172815b] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background image with rotation */}
      <Link to="/"></Link>
      <motion.div
        className="absolute z-10 h-[400px] w-[400px] bg-cover bg-center ml-[40%] rounded-md"
        style={{
          backgroundImage: `url(${bg})`,
          rotate: 45, // Rotate the image to create a diamond shape
          originX: "50%", // Set the rotation origin to the center horizontally
          originY: "50%", // Set the rotation origin to the center vertically
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)", // Add a shadow effect
        }}
        whileHover={{ scale: 1.05 }} // Scale up the image on hover
        transition={{ duration: 0.3 }} // Set the transition duration
      ></motion.div>

      {/* Content with motion */}
      <motion.div
        className="max-w-4xl text-center px-4 relative z-20 mr-[40%] bottom-8 -translate-x-16"
        initial={{ opacity: 0, y: -50 }} // Initial animation settings
        animate={{ opacity: 1, y: 0 }} // Animation settings when component is mounted
        transition={{ duration: 1 }} // Animation duration
      >
        <h1 className="text-black text-6xl font-bold">
          The <span className="text-[#be123c]">Aarya </span>
          Tech.
        </h1>
        <div className="mt-4 flex items-start justify-between w-full">
          <h2 className="text-xl text-semibold text-slate-600">
            We offer the
            <span className="text-2xl font-bold ml-1">services</span> related to
            IT
          </h2>
        </div>
        <div className="mt-8">
          <a href="/services">
            <Button
              text="Explore Our Services"
              className="bg-[#d9e2e2] py-4 px-8 rounded-full text-black flex items-center gap-2 text-xl transition-transform transform hover:scale-105"
              icon={<FaArrowRight />}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Body;
