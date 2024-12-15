import React, { useState } from "react";
import { FaTimes, FaPencilAlt } from "react-icons/fa";
import PatientModal from "./PatientModal";

const PatientTable = ({ patients, onUpdatePatient, onDelete }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  // API call to update a patient
  const handleUpdate = async (updatedPatient) => {
    try {
      const response = await fetch(
        `http://localhost:3000/patients/${updatedPatient._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedPatient),
        }
      );
      const updatedData = await response.json();
      onUpdatePatient(updatedData); // Update the patient in the parent state
      setSelectedPatient(null); // Close the modal after update
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  return (
    <>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-50">
            {[
              "Patient Name",
              "Age",
              "Gender",
              "Blood Group",
              "Phone Number",
              "Email ID",
              "User Action",
            ].map((heading) => (
              <th key={heading} className="p-3 text-gray-600">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id} className="hover:bg-gray-100">
              <td className="p-3">{patient.name}</td>
              <td className="p-3">{patient.age}</td>
              <td className="p-3">{patient.gender}</td>
              <td className="p-3">{patient.bloodGroup}</td>
              <td className="p-3">{patient.phone}</td>
              <td className="p-3">{patient.email}</td>
              <td className="p-3 flex justify-center items-center space-x-2">
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="text-green-500 border border-green-500 p-1 rounded-md"
                >
                  <FaPencilAlt />
                </button>
                <button
                  onClick={() => onDelete(patient._id)} // Use the passed `onDelete` prop
                  className="text-red-500 border border-red-500 p-1 rounded-md"
                >
                  <FaTimes />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pass selectedPatient to PatientModal */}
      <PatientModal
        isOpen={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
        onSubmit={handleUpdate}
        patient={selectedPatient}
      />
    </>
  );
};

export default PatientTable;
