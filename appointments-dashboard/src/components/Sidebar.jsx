import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">JHC Clinic</h1>
      <ul className="space-y-4">
        <li className="text-blue-500 font-semibold">Dashboard</li>
        <li className="text-gray-600 hover:text-blue-500">Patients</li>
        <li className="text-blue-500 font-semibold">Appointments</li>
        <li className="text-gray-600 hover:text-blue-500">Doctors</li>
        <li className="text-gray-600 hover:text-blue-500">Messages</li>
        <li className="text-gray-600 hover:text-blue-500">Medicine Inventory</li>
        <li className="text-gray-600 hover:text-blue-500">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
