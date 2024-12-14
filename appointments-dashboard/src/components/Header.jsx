import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mb-5">
      <h2 className="text-3xl font-bold">Appointments</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        + New Appointment
      </button>
    </div>
  );
};

export default Header;
