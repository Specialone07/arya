import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wp from "./wp.jpg";
import dm from "./dm.jpg";
import em from "./em.jpg";
import ap from "./ap.jpg";
import bs from "./bs.jpg";
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 bg-[#ebedee]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 font-Roboto">
          Services we Provide
        </h2>
        <Slider {...settings}>
          {/* Service Card 1: Web Designing and Hosting */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={wp}
              alt="Web Design"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Web Designing and Hosting
              </h3>
              <ul className="list-disc pl-6">
                <li>Professional Website</li>
                <li>Ecommerce Website</li>
                <li>Business Website</li>
              </ul>
            </div>
          </div>
          {/* Service Card 2: Digital Marketing and Branding */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={dm}
              alt="Digital Marketing"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Digital Marketing and Branding
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare velit ut nulla lobortis, quis suscipit nisi consequat.
                Vivamus luc
              </p>
            </div>
          </div>
          {/* Service Card 3: E Commerce Account Management */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={ap}
              alt="Ecommerce Management"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Application Development
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare velit ut nulla lobortis, quis suscipit nisi consequat.
                Vivamus luc
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={em}
              alt="Ecommerce Management"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Space Setup</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare velit ut nulla lobortis, quis suscipit nisi consequat.
                Vivamus
              </p>
            </div>
          </div>
         
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={bs}
              alt="Ecommerce Management"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Business Email Setup
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Se
                Aliquam pulvinar risus eget mauris scelerisque, id tempor ex
                lobortis.
              </p>
            </div>
          </div>
          {/* Additional service cards */}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
