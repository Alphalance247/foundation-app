import React from "react";
import Image from "next/image";

const BestAnalytics = () => {
  return (
    <div>
      <div className="px-3 py-[10px] bg-[#FDFBE9] h-[72px] rounded-lg">
        <div className="flex justify-between mb-2 ">
          <div>
            <p className="text-[6px] leading-[8px] text-[#b1b1b1]">
              Most Profitable
            </p>
            <p className="text-[#343434] text-[10px] leading-[1rem]">Lagos</p>
          </div>

          <div>
            <Image
              src="/assets/f1.png"
              width={28}
              height={28}
              className="w-full"
              alt="analytics"
            />
          </div>
        </div>

        <p className="text-[#343434] text-[10px] leading-[1rem] font-bold">
          ₦ 91,920 /{" "}
          <span className="text-[#343434] text-[10px] leading-[1rem] font-normal">
            ₦ 280,200
          </span>
        </p>
      </div>
    </div>
  );
};

export default BestAnalytics;
