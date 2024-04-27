import React from "react";

// icons
import { IoIosPaperPlane } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";

function SubscribeComponent() {
  return (
    <div className="bg-textWhite px-[40px] py-[30px] flex flex-col lg:flex-row gap-[30px] items-center justify-between rounded-[20px]">
      <h3 className="text-2xl text-primaryBlue font-bold">
        Subscribe newsletter
      </h3>

      <div className="bg-secondaryYelow rounded-[10px] flex items-center px-[24px] py-[12px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-transparent outline-none text-textWhite placeholder:text-textLightBlue"
        />
        <IoIosPaperPlane size={25} color="white" />
      </div>

      <div className="flex items-center gap-[10px]">
        <FaHeadphonesAlt size={40} color="#EDA415" />
        <span className="text-2xl">Call Us: (+381) 0234 456</span>
      </div>
    </div>
  );
}

export default SubscribeComponent;
