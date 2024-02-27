import React from "react";
import AnimatedCounter from "./Animate";
const Ecom = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left section */}
      <div className="w-full md:w-1/2 bg-white p-4 md:ml-10 mt-10">
        <div>
          <h2 className="text-lg font-Roboto mb-2">
            Ecommerce Account Management
          </h2>
          <div className="mb-6 font-Poppins font-semibold">
            <h1>Ecommerce Account Management Company in Dubai</h1>
          </div>
          <p className="text-justify">
            Ditch the overwhelm and unlock your ecommerce potential with Aarya
            Computer Trading. We're more than just account managers; we're your
            strategic partners, dedicated to your success. Focus on selling,
            while we handle the rest. Our experts optimize listings, leverage
            data for growth, and ensure seamless operations - from order
            fulfillment to customer support. We even navigate UAE regulations
            and data security, giving you peace of mind. But it's not just
            management. We collaborate on your growth strategy, implement
            effective marketing campaigns, and continuously optimize for
            sustained success. Stop struggling, start thriving. Contact us today
            for a free consultation and discover how our Ecommerce Account
            Management can propel your Dubai business to new heights.
          </p>
          <div className="mt-9 font-bold text-gray-600 text-4xl">
            Your Growth Begins Here!
            <button className="ml-4  bg-purple-500  rounded text-black text-3xl px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 p-4 mt-10 md:mt-0 gap-10 flex justify-center items-start">
        <div className="p-6 rounded-lg shadow-md w-full md:w-4/5">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
            <div className="bg-slate-400 w-full h-60 p-4 rounded-lg shadow-md">
              <AnimatedCounter targetValue={100} />
              <h3 className="text-3xl font-bold mt-2 mb-2 text-white ml-3">
                Projects
              </h3>
              <br />
              <p className="ml-3 text-white">
                We Have Successfully Completed Over
              </p>
            </div>

            <div className="bg-[#38bdf8] w-full h-60 p-4 rounded-lg shadow-md">
              <AnimatedCounter targetValue={100} />
              <h3 className="text-3xl font-bold mt-2 mb-2 text-white ml-3">
                Happy Clients
              </h3>
              <br />
              <p className="ml-3 text-white">We Have more than</p>
            </div>

            <div className="bg-green-200 w-full h-60 p-4 rounded-lg shadow-md">
              <AnimatedCounter targetValue={1} />
              <h3 className="text-3xl font-bold mt-2 mb-2 text-black ml-1">
                Years Experience
              </h3>
              <br />
              <p className="ml-3 text-black">We've been here for more than</p>
            </div>
            <div className="bg-blue-800 w-full h-60 p-4 rounded-lg shadow-md">
              <AnimatedCounter targetValue={2} />
              <h3 className="text-3xl font-bold mt-2 mb-2 text-white ml-2">
                Leads
              </h3>
              <br />
              <p className="ml-3 text-white">all We've Generated over</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom;