import React from "react";
import {
  FaPhone,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Button from "../button/button";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h1 className="text-[2.5rem] font-bold">
        Get <span className="text-red-600">In Touch</span>
      </h1>
      <h4 className="text-1.9xl text-[#252327] font-bold">
        Our Friendly team would love to hear from you
      </h4>
      <div className="p-5 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 shadow-sm shadow-slate-400 rounded-3xl max-w-[1128px]">
        <div className="w-full lg:w-[461px] bg-[#9dc5cc] rounded-3xl text-black px-8 py-16 gap-16 flex flex-col">
          <div className="flex flex-col gap-6">
            <h1 className="flex gap-2 font-bold text-2xl relative">
              <FaLocationDot />
              <span className="absolute -top-1 left-8"> Our Address</span>
            </h1>
            <h4 className="text-2xl sans">Al Fahidi, Abu Dhabi, UAE</h4>
          </div>
          <div className="gap-6 flex flex-col">
            <h1 className="flex gap-2 font-bold text-2xl relative">
              <FaPhone />
              <span className="absolute -top-1 left-8">Our Contact</span>
            </h1>
            <div className="flex items-start gap-14">
              <div className="flex flex-col gap-3 text-2xl sans">
                <h1>Mobile</h1>
                <h1> +971547584609 </h1>
              </div>
              <div className=" flex flex-col gap-3 text-2xl sans">
                <h1>Landline</h1>
                <h1>01-523896</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="flex gap-2 font-bold relative text-2xl">
              <FaClock className="" />{" "}
              <span className="absolute -top-1 left-8">24 hour service</span>
            </h1>
            {/* <div className="flex gap-14">
              <div className="flex flex-col text-2xl">
                <h1 className="font-bold">MON - FRI</h1>
                <h3 className="sans">10 am - 8 pm</h3>
              </div>
              <div className="flex flex-col text-2xl">
                <h1 className="font-bold">SAT - SUN</h1>
                <h3 className="sans">Closed</h3>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sans">Get in touch in social networks</h1>
            <div className="flex gap-4 text-3xl">
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[587px] px-8 py-6">
          <form className="flex flex-col h-full w-full gap-4">
            <div className="flex gap-2 ">
              <div className="flex flex-col gap-2 w-[260px]">
                <label htmlFor="" className="text-xl">
                  FirstName
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="border-2 py-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-[260px]">
                <label htmlFor="" className="text-xl">
                  LastName
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="border-2 py-4 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 rounded-md py-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Phone Number
              </label>
              <div className="border-2 rounded-md flex items-center gap-1">
                <select
                  name="country"
                  id="country"
                  className="py-4 px-2 bg-white rounded-md text-xl"
                >
                  <option value="" className="bg-white text-xl">
                    +
                  </option>
                </select>
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-full w-full py-5 border-l-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="60"
                rows="7"
                className="border-2"
              ></textarea>
            </div>
            <div>
              <Button
                text="Send Message"
                type="submit"
                className="py-4 px-5 font-Roboto bg-red-600 text-white rounded-md hover:bg-blue-400 hover:text-white hover:shadow-lg transition duration-300 ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
