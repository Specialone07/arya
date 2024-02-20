import React from "react";
import { FaPhone, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] overflow-x-auto flex flex-col items-center justify-center mt-4 px-4 lg:px-0">
      <h1 className="text-2xl lg:text-[2.5rem] font-bold">
        Get <span className="text-red-600">In Touch</span>
      </h1>
      <h4 className=" mt-1 text-lg lg:text-1.9xl text-[#252327] font-bold">
        So we can find the optimal solution tailored to your needs.
      </h4>
      <div className="p-5 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 shadow-sm shadow-slate-400 rounded-3xl max-w-[1128px]">
        <div className="w-full lg:w-auto bg-[#9dc5cc] rounded-3xl text-black px-8 py-8 lg:py-16 gap-8 lg:gap-16 flex flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-2 font-bold text-xl lg:text-2xl relative">
              <FaLocationDot />
              <span className="absolute -top-1 left-8"> Our Address</span>
            </h1>
            <h4 className="text-xl lg:text-2xl sans">
              Al Fahidi, Abu Dhabi, UAE
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-2 font-bold text-xl lg:text-2xl relative">
              <FaPhone />
              <span className="absolute -top-1 left-8">Our Contact</span>
            </h1>
            <div className="flex flex-col gap-2 text-xl lg:text-2xl sans">
              <h1>Mobile: +971547584609</h1>
            </div>
            <div className="flex flex-col gap-2 text-xl lg:text-2xl sans">
              <h1>
                Email:{" "}
                <a
                  href="mailto:info@aaryacomputer.com"
                  className="text-black hover:underline"
                >
                  info@aaryacomputer.com
                </a>
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="flex gap-2 font-bold relative text-xl lg:text-2xl">
              <FaClock className="" />{" "}
              <span className="absolute -top-1 left-8">24 hour service</span>
            </h1>
          </div>
        </div>
        {/* Map container */}
        <div className="w-full lg:w-auto bg-[#e7e9e9] rounded-3xl text-black px-8 py-8 lg:py-16 gap-8 lg:gap-16 flex flex-col">
          <div className="map-container">
            {/* Embed Google Maps iframe */}
            <iframe
              title="Aarya Computer Trading LLC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.220596023035!2d55.2900809753839!3d25.263163677668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4386b475bf6f%3A0x8da648831f3d5b0!2sAarya%20Computer%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1708405018856!5m2!1sen!2sae"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
