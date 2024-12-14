// src/components/UpdateAppointmentModal.jsx

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { updateAppointment } from '../api';

Modal.setAppElement('#root');  // Accessibility requirement

// Function to convert time to 12-hour format with AM/PM
const convertTo12Hour = (time) => {
  const [hour, minute] = time.split(':').map(Number);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;  // Convert 0 to 12 for midnight
  return `${hour12}:${minute.toString().padStart(2, '0')} ${suffix}`;
};

const UpdateAppointmentModal = ({
  isOpen,
  onRequestClose,
  refreshAppointments,
  appointmentData,  // Existing appointment data for editing
}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');  
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  // Populate form fields when editing an existing appointment
  useEffect(() => {
    if (appointmentData && isOpen) {
      setName(appointmentData.patientName);
      setAge(String(appointmentData.patientAge));
      setDate(appointmentData.date);
      setTime(appointmentData.time.split(' ')[0]);  // Convert back to 24-hour time
      setDoctor(appointmentData.doctor);
    } else if (!isOpen) {
      setName('');
      setAge('');
      setDate('');
      setTime('');
      setDoctor('');
    }
  }, [isOpen, appointmentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedTime = convertTo12Hour(time);
      const data = {
        patientName: name,
        patientAge: Number(age),
        date,
        time: formattedTime,
        doctor,
      };

      // Call the update API for existing appointment
      await updateAppointment(appointmentData._id, data);

      refreshAppointments();  // Refresh the appointment list
      onRequestClose();  // Close the modal
    } catch (error) {
      console.error('Failed to update appointment:', error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update Appointment"
    >
      <h2>Update Appointment</h2>

      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <label>Patient Name</label>
        <input
          className="border rounded p-2 mt-1"
          type="text"
          placeholder="Enter Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Patient Age */}
        <label>Patient Age</label>
        <input
          className="border rounded p-2 mt-1"
          type="number"
          placeholder="Enter Patient Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        {/* Date of Appointment */}
        <label>Date</label>
        <input
          className="border rounded p-2 mt-1"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Time of Appointment */}
        <label>Time</label>
        <input
          className="border rounded p-2 mt-1"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        {/* Doctor's Name */}
        <label>Doctor</label>
        <input
          className="border rounded p-2 mt-1"
          type="text"
          placeholder="Enter Doctor's Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />

        {/* Save Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-2 mt-2 rounded"
        >
          Update
        </button>

        {/* Cancel Button */}
        <button
          type="button"
          onClick={onRequestClose}
          className="mt-2 bg-red-500 text-white rounded p-2"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default UpdateAppointmentModal;
