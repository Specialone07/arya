import React from "react";
import ap from "./ap.jpg";

const Client = () => {
  return (
    <div className="lg:p-10 p-6 font-[sans-serif] text-[#333] bg-gray-100">
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-extrabold">
          Hear from Our <span className="text-red-600">Delighted Clients</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-w-6xl mx-auto">
        {/* Client 1 */}
        <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white relative">
          <img
            src="https://readymadeui.com/profile_2.webp"
            alt="Client Avatar"
            className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
          />
          <div className="flex space-x-1 mt-4">{/* Star icons */}</div>
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-justify">
              The service provided by the company was exceptional. Response
              friendly and attentive to my needs. I never had to wait long for
              assistance, and the solutions delivered were both effective and
              prompt. Overall, I am highly satisfied with the level of service
              and professionalism exhibited by the company.
            </p>
            <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
              John Doe
            </h4>
            <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
          </div>
        </div>

        {/* Client 2 */}
        <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white relative">
          <img
            src={ap}
            alt="Client Avatar"
            className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
          />
          <div className="flex space-x-1 mt-4">{/* Star icons */}</div>
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-justify">
              The service provided by the company was exceptional. Response
              friendly and attentive to my needs. I never had to wait long for
              assistance, and the solutions delivered were both effective and
              prompt. Overall, I am highly satisfied with the level of service
              and professionalism exhibited by the company.
            </p>
            <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
              Mark Adair
            </h4>
            <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
          </div>
        </div>

        {/* Client 3 */}
        <div className="max-w-[350px] h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white relative">
          <img
            src="https://readymadeui.com/profile_4.webp"
            alt="Client Avatar"
            className="w-14 h-14 rounded-full absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
          />
          <div className="flex space-x-1 mt-4">{/* Star icons */}</div>
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-justify">
              The service provided by the company was exceptional. Response
              friendly and attentive to my needs. I never had to wait long for
              assistance, and the solutions delivered were both effective and
              prompt. Overall, I am highly satisfied with the level of service
              and professionalism exhibited by the company.
            </p>
            <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
              Simon Konecki
            </h4>
            <p className="mt-1 text-xs text-gray-400">Founder of Labar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
