import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="text-gray-400" disabled>
        Previous
      </button>
      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">1</button>
        <button className="text-blue-500">2</button>
        <button className="text-blue-500">3</button>
        <button className="text-blue-500">4</button>
      </div>
      <button className="text-blue-500">Next</button>
    </div>
  );
};

export default Pagination;
