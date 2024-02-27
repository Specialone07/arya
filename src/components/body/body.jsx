import React from "react";
import { Link } from "react-router-dom";
// import sp from "./sp.jpg";
import bg from "./bg.png";
const Body = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`, // Overlay with semi-transparent layer
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "20px",
    padding: "4rem 2rem", // Increase the vertical padding to adjust the height
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow for depth
  };

  const foldedImageStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0% 100%)", // Adjust clip path for smaller fold
    transition: "all 0.3s ease-in-out",
    transformOrigin: "center",
    borderRadius: "20px", // Adjust the value as needed
    maxWidth: "60%", // Adjust the maximum width of the image
    maxHeight: "60%", // Adjust the maximum height of the image
  };

  return (
    <div
      className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
      style={{ ...containerStyle, backgroundColor: "rgba(255, 255, 255, 0.8)" }} // Adjust background opacity
    >
      <div className="flex flex-col items-left pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold font-Poppins text-gray-200 xl:text-5xl lg:text-3xl">
          <span className="block w-full">
            Aarya <span className="text-red-600">Trading</span>
          </span>{" "}
        </h1>
        <br />
        <h2 className="mt-2 text-white font-Roboto">
          We specialize in web development, cloud solutions, <br />
          app development, and business setup services
        </h2>
        <div className="mt-6">
          <Link
            to="/services"
            className="inline-block px-4 py-2 text-lg font-semibold tracking-wider text-white bg-red-500 rounded-md transition-colors duration-300 hover:bg-blue-600"
            style={{
              borderRadius: "8px",
              backgroundImage: "linear-gradient(to right, #FF0000, #0000FF)", // Red to blue gradient
              backgroundSize: "200% auto", // Double the width to cover the entire button
              transition: "background-position 0.5s", // Smooth transition for background position
            }}
            onMouseEnter={(e) => (e.target.style.backgroundPosition = "right")} // Move from left to right on hover
            onMouseLeave={(e) => (e.target.style.backgroundPosition = "left")} // Move back to original position on mouse leave
          >
            Explore More
          </Link>
        </div>
      </div>

      <div
        className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0"
        style={{ position: "relative" }}
      >
        <img
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="https://img.freepik.com/premium-photo/businessman-hand-touching-dartboard-with-arrow-setup-business-target-objective-goal-concept-by-3d-render-illustration_50039-3935.jpg"
          alt=""
          width="500"
          height="488"
          style={foldedImageStyle}
        />
      </div>
    </div>
  );
};

export default Body;
