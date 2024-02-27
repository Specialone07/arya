import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatBox = ({ phoneNumber }) => {
  const openWhatsAppChat = () => {
    if (phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    } else {
      console.error("WhatsApp phone number is not provided.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8 sm:bottom-4 sm:right-4">
      <button
        onClick={openWhatsAppChat}
        className="bg-green-500 text-white flex items-center justify-center rounded-full p-3 shadow-md hover:bg-green-600 focus:outline-none"
        style={{ minWidth: "100px" }} // Set minimum width
      >
        <FaWhatsapp className="mr-2 text-xl sm:text-2xl" /> {/* Adjust size based on screen */}
        <span className="hidden sm:inline">Chat on WhatsApp</span> {/* Hide on smaller screens */}
      </button>
    </div>
  );
};

const App = () => {
  const phoneNumber = "+971547584609"; // Your WhatsApp phone number
  return (
    <div>
      {/* <h1>Welcome to my website!</h1> */}
      <ChatBox phoneNumber={phoneNumber} />
    </div>
  );
};

export default App;
