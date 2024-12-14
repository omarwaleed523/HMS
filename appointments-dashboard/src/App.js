import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import SearchFilter from "./components/SearchFilter";
import AppointmentsTable from "./components/AppointmentsTable";

function App() {
  return (
    <div className="h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Header />
        <Tabs />
        <div className="bg-white shadow rounded-lg p-5">
          <SearchFilter />
          <AppointmentsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
