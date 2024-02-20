import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dm from "./dm.jpg";
import em from "./em.jpg";
import ap from "./ap.jpg";
import bs from "./bs.jpg";
import web from "./web.jpeg";
import ecom from "./ecom.webp";
import gd from "./gd.webp";
import dr from "./dr.webp";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Slide transition speed in milliseconds
    autoplay: true, // Automatically start sliding
    autoplaySpeed: 1000, // Delay between slides in milliseconds
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

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="py-20 bg-[#ebedee]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 font-Roboto">
          Our Services
        </h2>
        <Slider {...settings}>
          {/* Service Card 1: Web Designing and Hosting */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={web}
              alt="Web Design"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Web Designing and Hosting
              </h3>
              <p>
                {expandedCard === 0
                  ? "Struggling to attract customers online? Our expert web designers create beautiful, user-friendly websites that convert visitors into leads. We offer secure, reliable hosting plans and optimize your site for search engines, ensuring your business gets found. Whether you need a simple brochure site or a complex e-commerce store, we have the expertise to bring your vision to life. Let us help you stand out online and achieve your business goals."
                  : "Struggling to attract customers online? Our expert web designers create beautiful, user-friendly websites that convert visitors into leads. We offer secure, reliable hosting plans and optimize your site for search engines, ensuring your business gets found. Whether you need a simple brochure site or a complex e-commerce store, we have the expertise to bring your vision to life."}
              </p>
              {expandedCard !== 0 && (
                <button
                  onClick={() => toggleExpand(0)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 2: Digital Marketing and Branding */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={ecom}
              alt="Digital Marketing"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Ecommerce Management
              </h3>
              <p>
                {expandedCard === 1
                  ? "Frustrated with managing your Noon & Amazon accounts? Our expert e-commerce management team takes the burden off your shoulders. We optimize product listings, manage inventory efficiently, and run targeted advertising campaigns to skyrocket your sales. We stay ahead of the curve on platform changes and ensure your products are always seen by the right customers. Focus on what you do best while we handle the e-commerce complexities and boost your sales.."
                  : "Frustrated with managing your Noon & Amazon accounts? Our expert e-commerce management team takes the burden off your shoulders. We optimize product listings, manage inventory efficiently, and run targeted advertising campaigns to skyrocket your sales."}
              </p>
              {expandedCard !== 1 && (
                <button
                  onClick={() => toggleExpand(1)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
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
                {expandedCard === 2
                  ? "Bring your game-changing ideas to life with our custom application development services. Whether you need a sleek mobile app to engage customers, a powerful web app to streamline operations, or a robust enterprise application to manage complex data, our expert developers have the skills and experience to turn your vision into reality. We utilize cutting-edge technologies and agile development methodologies to deliver innovative solutions that are tailored to your specific needs and budget. From ideation to launch and beyond, we'll be your partner every step of the way, ensuring a successful application that drives results."
                  : "Bring your game-changing ideas to life with our custom application development services. Whether you need a sleek mobile app to engage customers, a powerful web app to streamline operations, or a robust enterprise application to manage complex data, our expert developers have the skills and experience to turn your vision into reality."}
              </p>
              {expandedCard !== 2 && (
                <button
                  onClick={() => toggleExpand(2)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 4: Cloud Space Setup */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={em}
              alt="Cloud Space Setup"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Space Setup</h3>
              <p>
                {expandedCard === 3
                  ? "Unlock the power of the cloud and simplify your data management with our expert cloud space setup services. We provide secure, scalable, and accessible storage solutions for your business, allowing you to store and access your data from anywhere, anytime. Our team will carefully assess your needs and recommend the most suitable cloud platform, ensuring optimal performance and cost-efficiency. We'll handle the entire migration process seamlessly, minimizing downtime and disruption. Embrace the flexibility and scalability of the cloud with our expert guidance, empowering your team to collaborate efficiently and access critical information instantly."
                  : "Unlock the power of the cloud and simplify your data management with our expert cloud space setup services. We provide secure, scalable, and accessible storage solutions for your business, allowing you to store and access your data from anywhere, anytime."}
              </p>
              {expandedCard !== 3 && (
                <button
                  onClick={() => toggleExpand(3)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 5: Business Email Setup */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={bs}
              alt="Business Email Setup"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Business Email Setup
              </h3>
              <p>
                {expandedCard === 4
                  ? "Ditch the email chaos and embrace seamless communication with our professional email setup services. We configure secure, reliable, and efficient email solutions for your business, ensuring smooth operation and optimal productivity. Say goodbye to downtime and data loss with our robust security measures and backup systems. We offer various plans to cater to different team sizes and needs, and our expert support team is always available to assist you with any queries. Focus on what matters most while we take care of your email infrastructure, allowing you to connect and collaborate effectively with your team and clients."
                  : "Ditch the email chaos and embrace seamless communication with our professional email setup services. We configure secure, reliable, and efficient email solutions for your business, ensuring smooth operation and optimal productivity."}
              </p>
              {expandedCard !== 4 && (
                <button
                  onClick={() => toggleExpand(4)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 6: Digital Marketing and Branding */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={dm}
              alt="Digital Marketing and Branding"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Digital Marketing and Branding
              </h3>
              <p>
                {expandedCard === 5
                  ? "Is your brand invisible online? We'll craft a winning digital marketing strategy that gets your brand noticed and drives results. From targeted social media campaigns to effective search engine optimization (SEO), we'll reach your ideal audience and build lasting brand awareness. We don't just create logos and slogans – we develop a complete brand identity that resonates with your customers and tells your unique story. Let us unlock the full potential of your brand and connect you with your target audience."
                  : "Is your brand invisible online? We'll craft a winning digital marketing strategy that gets your brand noticed and drives results. From targeted social media campaigns to effective search engine optimization (SEO), we'll reach your ideal audience and build lasting brand awareness."}
              </p>
              {expandedCard !== 5 && (
                <button
                  onClick={() => toggleExpand(5)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 7: Graphics Design */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={gd}
              alt="Graphics Design"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
              <p>
                {expandedCard === 6
                  ? "Make a lasting impression with stunning visuals. Our talented graphic designers create impactful logos, illustrations, marketing materials, and more that capture your brand essence and tell your story. We work closely with you to understand your vision and translate it into eye-catching designs that resonate with your target audience. Whether you need a brand refresh or a complete design overhaul, we have the expertise to make your brand stand out. Let us help you communicate your message effectively and create a memorable visual identity."
                  : "Make a lasting impression with stunning visuals. Our talented graphic designers create impactful logos, illustrations, marketing materials, and more that capture your brand essence and tell your story."}
              </p>
              {expandedCard !== 6 && (
                <button
                  onClick={() => toggleExpand(6)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Service Card 8: Device Supply and Repair */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={dr}
              alt="Device Supply and Repair"
              className="w-full h-[170px] object-contain mt-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Device Supply and Repair
              </h3>
              <p>
                {expandedCard === 7
                  ? "Keep your business running smoothly with our comprehensive device supply and repair services. We offer a wide range of top-brand mobile phones, computers, and laptops at competitive prices, ensuring you find the perfect devices for your team's needs. Our expert technicians provide fast and reliable repairs for all types of devices, minimizing downtime and maximizing productivity. We understand the importance of keeping your data safe, so we offer secure data recovery services to ensure peace of mind. Whether you need new devices, repairs, or data recovery, we're your one-stop shop for all your IT hardware needs, keeping your business up and running efficiently."
                  : "Keep your business running smoothly with our comprehensive device supply and repair services. We offer a wide range of top-brand mobile phones, computers, and laptops at competitive prices, ensuring you find the perfect devices for your team's needs."}
              </p>
              {expandedCard !== 7 && (
                <button
                  onClick={() => toggleExpand(7)}
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                >
                  See More
                </button>
              )}
            </div>
          </div>
          {/* Add similar structure for other service cards */}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
