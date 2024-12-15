import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaStethoscope,
  FaEnvelope,
  FaBook,
  FaPills,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Menu items with corresponding routes
  const menuItems = [
    { name: "Dashboard", icon: <FaUser />, route: "/dashboard" },
    { name: "Patients", icon: <FaUser />, route: "/patients" },
    { name: "Appointments", icon: <FaCalendarAlt />, route: "/appointments" },
    { name: "Doctors", icon: <FaStethoscope />, route: "/doctors" },
    { name: "Messages", icon: <FaEnvelope />, route: "/messages" },
    { name: "Education Content", icon: <FaBook />, route: "/education-content" },
    { name: "Medicine Inventory", icon: <FaPills />, route: "/medicine-inventory" },
    { name: "Settings", icon: <FaCog />, route: "/settings" },
  ];

  // Determine the selected menu item based on the current route
  const selectedMenu = menuItems.find((item) => location.pathname === item.route)?.name || "";

  return (
    <div className="w-60 h-screen bg-[#F9FBFF] text-[#1E293B] shadow-lg relative">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-xl font-bold text-blue-600">Al-Mohammady Clinic</h1>
      </div>

      {/* Sidebar Menu */}
      <ul className="flex flex-col space-y-1 p-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(item.route)} // Navigate to the route
            className={`flex items-center space-x-2 p-3 rounded-md cursor-pointer 
            ${
              selectedMenu === item.name
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-200"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Logout Section */}
      <div
        className="absolute bottom-6 left-6 flex items-center space-x-2 cursor-pointer text-red-500"
        onClick={() => {
          // Redirect to login or handle logout logic
          navigate("/login");
        }}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
