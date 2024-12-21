import React from "react";
import { FaPlus } from "react-icons/fa";

const Tabs = ({ onAddAppointment }) => {
  return (
    <div className="flex mb-5 justify-between w-full">
      <button className="text-blue-600 font-semibold border-b-2 border-blue-600 px-4 py-2">
        NEW APPOINTMENTS
      </button>

      {/* New Appointment Button aligned to the right */}
      <button
        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ml-auto"
        onClick={onAddAppointment}
      >
        <FaPlus />
        <span>New Appointment</span>
      </button>
    </div>
  );
};

export default Tabs;
