import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import AppointmentsTable from "../components/AppointmentsTable";
import NewAppointmentModal from "../components/NewAppointmentModal";
import { fetchAppointments } from "../api";

const Appointments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the backend when the component mounts
  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const response = await fetchAppointments();
        setAppointments(response.data); // Assuming the API returns appointments in `data`
      } catch (err) {
        console.error("Failed to load appointments", err.message);
      }
    };
    loadAppointments();
  }, []); // This runs only once when the component mounts

  const handleCloseModal = () => {
    setIsModalOpen(false);
    loadAppointments();  // Refresh appointments after modal closes
  };

  const handleAddAppointment = () => {
    setIsModalOpen(true); // Open the modal for adding a new appointment
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Pass the handleAddAppointment function to Tabs */}
      <Tabs onAddAppointment={handleAddAppointment} />

      {/* Appointments Table */}
      <div className="flex-1 p-10 bg-white shadow rounded-lg">
        <AppointmentsTable appointments={appointments} />
      </div>

      {/* Modal for New Appointment */}
      <NewAppointmentModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        refreshAppointments={() => fetchAppointments().then(res => setAppointments(res.data))}
      />
    </div>
  );
};

export default Appointments;
