import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

const SearchFilter = ({ onAddPatient }) => {
  return (
    <div className="flex justify-between mb-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-md p-3 w-1/3"
      />

      {/* New Patient Button */}
      <div className="flex justify-start mb-4">
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          onClick={onAddPatient}
        >
          <FaPlus />
          <span>New Patient</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
