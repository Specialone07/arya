import React, { useState } from "react";
import axios from "axios";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", { email });
      
      if (response.status === 201) {
        console.log("Subscription successful");
        setSuccess(true);
        // Clear the email input after successful submission
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setError(error.response.data.error || "Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="bg-none text-[#333] font-[sans-serif]">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold mt-2 text-blue-500">
          Newsletter
        </h3>
        <p className="text-sm mt-6">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-10 border focus-within:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm px-4 py-3"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 transition-all text-white font-semibold text-sm rounded-full px-8 py-3"
            >
              Submit
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Subscription successful!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Subscription;
