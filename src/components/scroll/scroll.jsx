import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi'; // Importing the Feather Icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 left-8 bg-blue-500 text-white px-4 py-2 rounded-full transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'} hover:bg-red-500 md:left-16 md:bottom-16`}
      onClick={scrollToTop}
      title="Go to top"
    >
      <FiArrowUp className="text-lg" /> {/* Using the Feather Icons arrow-up icon */}
    </button>
  );
};

export default ScrollToTopButton;
