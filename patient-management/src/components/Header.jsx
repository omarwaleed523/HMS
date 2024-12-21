import React from "react";
import { FaUser } from "react-icons/fa";

const Header = ({ pageTitle }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">{pageTitle}</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUser className="w-9 h-9 text-gray-500" />
          <div>
            <p className="font-bold">Jonitha Cathrine</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
