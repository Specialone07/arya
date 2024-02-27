import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetValue / 200; // Adjust speed here
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      setCount(Math.ceil(currentCount));

      if (currentCount >= targetValue) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <h1 className={`text-6xl font-bold mt-2 mb-2 ${targetValue === 1 ? 'text-black' : 'text-white'}`}>
      {count}+
    </h1>
  );
};

export default AnimatedCounter;
