"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaChartBar,
  FaCar,
  FaUsers,
  FaCog,
  FaTachometerAlt,
  FaUserCircle,
} from "react-icons/fa";
import FinancialAnalytics from "../components/dashboard/linechart/FinancialAnalytics";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Profile", icon: <FaUserCircle /> },
    { name: "User Analytics", icon: <FaChartBar /> },
    { name: "Reports", icon: <FaChartBar /> },
    { name: "Drivers", icon: <FaCar /> },
    { name: "Subscribers", icon: <FaUsers /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="py-6 px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h1>
          <ul className="space-y-4">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full text-left px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 ${
                    activeTab === tab.name ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  <span className="inline-flex items-center">
                    {tab.icon}
                    <span className="ml-2">{tab.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right-Hand Side (Placeholder for now) */}
      <main className="flex-1">
        {/* Content will be added here later */}
        <FinancialAnalytics />
      </main>
    </div>
  );
}
