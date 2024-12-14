import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import SearchFilter from "./components/SearchFilter";
import AppointmentsTable from "./components/AppointmentsTable";
import NewAppointmentModal from "./components/NewAppointmentModal";
import { fetchAppointments } from "./api";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the backend
  const loadAppointments = async () => {
    try {
      const response = await fetchAppointments();
      setAppointments(response.data);
    } catch (err) {
      console.error("Failed to load appointments", err.message);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    loadAppointments();  // Refresh appointments after modal closes
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Header setIsModalOpen={setIsModalOpen} />
        <Tabs />
        <div className="bg-white shadow rounded-lg p-5">
          <SearchFilter />
          <AppointmentsTable appointments={appointments} />
        </div>

        {/* Pass refreshAppointments to the modal */}
        <NewAppointmentModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          refreshAppointments={loadAppointments}
        />
      </div>
    </div>
  );
}

export default App;
