import React from "react";
import RevenueStreamBox from "./RevenueStreamBox";
import Chart from "../RegionalAnalysis/BarChart";

export default function FinancialAnalytics() {
  return (
    <section className="p-4">
      <div className="flex space-x-2">
        {/* Box 1 */}
        <div className="w-[100%] bg-white shadow-lg rounded-md p-4">
          {/* Content of Box 1 will go here */}
          <RevenueStreamBox />
        </div>

        {/* Box 2 */}
        <div className="w-[100%] bg-white shadow-lg rounded-md">
          {/* Content of Box 2 will go here */}
          <Chart />
        </div>
      </div>

      {/* Transaction history section (placeholder) */}
      <div className="mt-6">{/* This will be added later */}</div>
    </section>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function FinancialAnalytics() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         axios.get("/api/financial-data")
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching financial data:", error);
//             });
//     }, []);

//     return (
//         <section className="p-6">
//             <div className="flex space-x-4">
//                 {/* Box 1 */}
//                 <div className="w-[544px] h-[260px] bg-white shadow-lg rounded-md">
//                     {/* Content of Box 1 will go here */}
//                     {data ? <p>{data.box1Content}</p> : <p>Loading...</p>}
//                 </div>

//                 {/* Box 2 */}
//                 <div className="w-[544px] h-[260px] bg-white shadow-lg rounded-md">
//                     {/* Content of Box 2 will go here */}
//                     {data ? <p>{data.box2Content}</p> : <p>Loading...</p>}
//                 </div>
//             </div>

//             {/* Transaction history section (placeholder) */}
//             <div className="mt-6">{/* This will be added later */}</div>
//         </section>
//     );
// }

// const sampleData = {
//     box1Content: "Revenue: $10,000",
//     box2Content: "Expenses: $5,000",
//     transactions: [
//         { id: 1, description: "Sale", amount: 5000 },
//         { id: 2, description: "Purchase", amount: -2000 },
//         { id: 3, description: "Sale", amount: 3000 },
//         { id: 4, description: "Purchase", amount: -1000 },
//     ],
// };

// useEffect(() => {
//     // Simulate an API call
//     setTimeout(() => {
//         setData(sampleData);
//     }, 1000);
// }, []);
