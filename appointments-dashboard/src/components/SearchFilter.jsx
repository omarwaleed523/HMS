import React from "react";

const SearchFilter = () => {
  return (
    <div className="flex justify-between mb-3">
      <input
        type="text"
        placeholder="Search"
        className="border px-3 py-2 rounded"
      />
      <button className="bg-gray-200 px-4 py-2 rounded">Filter by Date</button>
    </div>
  );
};

export default SearchFilter;
