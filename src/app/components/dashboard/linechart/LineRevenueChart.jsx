import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example months
  datasets: [
    {
      label: "Cash Inflow",
      data: [12000, 1000, 14000, 17000, 16000, 19000, 20000], // Example data
      borderColor: "#4CAF50", // Green for cash inflow
      borderWidth: 2, // Thin line
      tension: 0.4, // Smooth curve
      fill: false,
    },
    {
      label: "Card Payments",
      data: [10000, 12000, 13000, 15000, 14000, 22000, 18000], // Example data
      borderColor: "#FF5722", // Orange for card payments
      borderWidth: 1, // Thin line
      tension: 0.9, // Smooth curve
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#333", // Adjust label color if needed
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#f0f0f0", // Adjust gridline color
      },
      ticks: {
        color: "#666",
      },
    },
    y: {
      grid: {
        color: "#f0f0f0", // Adjust gridline color
      },
      ticks: {
        color: "#666",
      },
    },
  },
};

const LineChart = () => (
  <div className="h-[250px] w-full">
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
