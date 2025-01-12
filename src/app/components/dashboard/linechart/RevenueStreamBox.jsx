import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import RevenueLineChart from "./LineRevenueChart";
import LineChart from "./LineRevenueChart";

const RevenueStreamBox = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // Function to handle opening calendar and setting selected date
  const handleDateChange = (e, type) => {
    if (type === "from") {
      setFromDate(e.target.value);
    } else {
      setToDate(e.target.value);
    }
  };

  return (
    <div className=" ">
      {/* Revenue Stream Title and Buttons */}
      <div className="flex items-center justify-between mb-4">
        {/* Revenue Stream Text */}
        <h2 className="text-base font-semibold text-gray-800">
          Revenue Stream
        </h2>

        {/* Buttons */}
        <div className="flex space-x-3">
          {/* From Date Button */}

          <div className="flex items-center space-x-2 bg-[#F3F3F3] px-2 py-2 rounded-md">
            <input
              type="date"
              className="bg-transparent border-none outline-none text-gray-600"
              value={fromDate}
              onChange={(e) => handleDateChange(e, "from")}
              placeholder="Select From Date"
            />
          </div>

          {/* To Date Button */}
          <div className="flex items-center space-x-2 bg-[#F3F3F3] px-2 py-2 rounded-md">
            <input
              type="date"
              className="bg-transparent border-none outline-none text-gray-600"
              value={toDate}
              onChange={(e) => handleDateChange(e, "to")}
              placeholder="Select To Date"
            />
          </div>

          {/* Apply Now Button */}
          <button
            className="px-2 py-2 bg-[#DDDDDD] rounded-md flex items-center"
            onClick={() => alert("Apply filters")}
          >
            <span>Apply Now</span>
          </button>
        </div>
      </div>

      {/* Placeholder for Chart (just the space for now) */}

      {/* <div className="w-full h-[150px] bg-gray-100 rounded-md"> */}
      {/* Chart will be added here */}
      {/* </div> */}
      <LineChart />
    </div>
  );
};

export default RevenueStreamBox;
