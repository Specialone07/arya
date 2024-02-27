import React, { useState } from "react";
import axios from "axios";

const Cont = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/form",
        formData
      );

      if (response.status === 201) {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white my-6 font-sans text-[#011c2b] rounded-lg p-4">
      <div className="text-center px-6 mt-4">
        <h2 className="text-3xl font-sans font-bold text-gray-800 mt-4 sm:mt-8">
          Let's Get <span className="text-red-600">Started Now!</span>
        </h2>
        <p className="text-bold text-black-400 mt-3">
          Have some big idea or brand to develop and need help?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
        <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
          <h2 className="text-xl font-bold text-white">Contact Information</h2>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help?
          </p>
          <ul className="mt-16 space-y-10">
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 479.058 479.058"
              ></svg>
              <a
                href="mailto:info@aaryacomputer.com"
                className="text-white text-sm ml-3"
              >
                <strong>info@aaryacomputer.com</strong>
              </a>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 482.6 482.6"
              ></svg>
              <a href="tel:+971547584609" className="text-white text-sm ml-3">
                <strong>+971547584609</strong>
              </a>
            </li>
            <li className="flex items-center max-lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                viewBox="0 0 368.16 368.16"
              ></svg>
              <a href="al fahidi" className="text-white text-sm ml-3">
                <strong>Al Fahidi, Bur Dubai, Dubai, UAE</strong>
              </a>
            </li>
          </ul>
          <ul className="flex max-lg:justify-center mt-16 space-x-4"></ul>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg ml-8">
          <p className="text-sm text-gray-600 mt-1 mb-4">
            Fill out the form below and we'll get back to you shortly.
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder=""
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-block text-black font-semibold py-2 px-4 mb-4"
            style={{
              borderRadius: "10px",
              backgroundImage: "linear-gradient(to left,  #0891b2,#FCd,)",
              backgroundSize: "200% auto",
              transition: "background-position 0.5s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundPosition = "right")}
            onMouseLeave={(e) => (e.target.style.backgroundPosition = "left")}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cont;
