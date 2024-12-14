import React from "react";

const Tabs = () => {
  return (
    <div className="flex mb-5">
      <button className="text-blue-600 font-semibold border-b-2 border-blue-600 px-4 py-2">
        NEW APPOINTMENTS
      </button>
      <button className="text-gray-500 px-4 py-2">COMPLETED APPOINTMENTS</button>
    </div>
  );
};

export default Tabs;
