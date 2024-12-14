// src/components/AppointmentsTable.jsx

import React, { useEffect, useState } from 'react';
import { fetchAppointments, deleteAppointment } from '../api';
import UpdateAppointmentModal from './UpdateAppointmentModal';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Load appointments from the server
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const response = await fetchAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Failed to load appointments:', error.message);
    }
  };

  // Handle deleting an appointment
  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      loadAppointments();
    } catch (error) {
      console.error('Failed to delete appointment:', error.message);
    }
  };

  // Open the modal to update an appointment
  const handleUpdate = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  // Close the update modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th>Time</th>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Patient Age</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id} className="border-t">
              <td>{appt.time}</td>
              <td>{appt.date}</td>
              <td>{appt.patientName}</td>
              <td>{appt.patientAge}</td>
              <td>{appt.doctor}</td>
              <td>
                <button
                  onClick={() => handleUpdate(appt)}
                  className="text-blue-500 mr-2"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(appt._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Appointment Modal */}
      <UpdateAppointmentModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        refreshAppointments={loadAppointments}
        appointmentData={selectedAppointment}
      />
    </div>
  );
};

export default AppointmentsTable;
