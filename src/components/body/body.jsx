import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "./bg.png";
import sp from "./sp.jpg";
const Body = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="bg-slate-400 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        {/* Content */}
        {/* <div className={`${styles.section} w-[90%] sm:w-[60%] z-10`}>
          <h1
            className={`text-4xl sm:text-6xl font-semibold text-red-600 mb-5 `}
          >
            Aarya Trading <br />
          </h1>
          <p className="pt-5 text-sm sm:text-lg text-gray-200"></p>
          <Link to="/services" className="inline-block mt-5">
            <div className={`${styles.button} py-3 px-6 rounded-md text-lg`}>
              <span className="text-white font-Poppins text-18">Know More</span>
            </div>
          </Link>
        </div> */}
      </div>

      {/* Background Image with Motion (Hidden on Small Screens) */}
      <Link to="/services">
        <motion.div
          className="absolute bottom-0 left-0 hidden sm:block w-full sm:w-[250px] sm:h-[250px] bg-cover rounded bg-center"
          style={{
            backgroundImage: `url(${sp})`,
            rotate: 45,
            originX: "50%",
            originY: "50%",
            top: "25%",
            left: "70%",
            scale: [0.9, 1],
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </Link>
    </div>
  );
};

export default Body;
