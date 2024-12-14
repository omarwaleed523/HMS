import React, { useEffect, useState } from 'react';
import { fetchAppointments, deleteAppointment } from '../api';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const response = await fetchAppointments();
    setAppointments(response.data);
  };

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    loadAppointments();
  };

  return (
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
              <button onClick={() => handleDelete(appt._id)} className="text-red-500">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsTable;
