import React, { useState } from "react";
import about from "./about.jpeg";

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const text =
    "Since its inception in 2022 AD, our company has been dedicated to delivering exceptional IT services, setting new  standards in the industry. We pride ourselves on our commitment to excellence, providing innovative solutions tailored to meet the unique needs of our clients. At our core, we believe in the power of technology to transform businesses and enhance efficiency. Our team of experts, driven by passion and expertise, works tirelessly to deliver cutting-edge solutions that drive success. We understand that each client is unique, and we strive to forge strong partnerships based on trust, transparency, and mutual respect. Our customer-centric approach ensures that we not only meet but exceed our clients' expectations, consistently delivering results that make a difference. With a focus on continuous improvement and staying ahead of the curve, we remain dedicated to innovation and excellence. As we continue to grow and evolve, we remain committed to our mission of empowering businesses through technology. Partner with us and experience the difference that our comprehensive IT services can make for your business. Together, let's unlock new opportunities and achieve remarkable success.";

  const truncatedText = text.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <section className="about_section layout_padding min-h-[70vh] sm:min-h-[80vh]">
      <div className="container mx-auto mt-2 lg:mt-4">
        <div className="heading_container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Us</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8">
          <div className="w-full lg:w-1/2 lg:mr-8">
            {" "}
            {/* Adjusted margin */}
            <div className="img-box">
              <img
                className="h-auto lg:h-80 w-full lg:max-w-md mx-auto"
                src={about}
                alt="About Us"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="detail-box">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                We Are <span style={{ color: "#ff0000" }}>Aarya</span> Trading
              </h3>
              <div> {/* Remove text-center class */}
                <p className="text-gray-700 mb-4">
                  {showFullText ? text : truncatedText}
                  {!showFullText && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={toggleText}
                    >
                      See More
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
