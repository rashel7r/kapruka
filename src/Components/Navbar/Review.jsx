import React from "react";
import foryou from "./flower.webp";

const Review = () => {
  return (
    <div className="w-[900px] mx-auto border-t border-b py-4 space-y-4 font-poppins border-[#505050]">
      {/* User Review */}
      <div className="flex items-start space-x-4 pl-40 pr-40">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-[#191D23] text-[16px]">Samantha Payne</h3>
          </div>
          <div className="flex text-yellow-400 text-[16px]">★★★★★</div>
          <p className="text-[#525252] text-[13.33px]">
            We booked a ‘Premium Cleaning Package’ with WISDOM CLEAN, and they delivered exceptional service.
          </p>
          <span className="text-[11.11px] text-[#64748B]">23 Nov 2021</span>
        </div>
      </div>

      {/* Business Response */}
      <div className="flex items-start space-x-4 pl-50 pr-25">
        <img src={foryou} alt="Business Logo" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-semibold text-[#191D23] text-[16px]">WISDOM CLEAN</h3>
          <p className="text-[#525252] text-[13.33px]">
            Thank you for your wonderful feedback! We’re thrilled to hear that you were satisfied with our Premium Cleaning Package. We appreciate your support and look forward to serving you again! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
