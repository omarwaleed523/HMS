import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Import the page components
import PatientsPage from "./pages/Patient";
import AppointmentsPage from "./pages/Appointments";

function App() {
  const [patients, setPatients] = useState([]); // Start with an empty array
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  // Fetch patient data from the backend when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:3000/patients");
        const data = await response.json();
        setPatients(data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleAddPatient = () => {
    setCurrentPatient(null);
    setModalOpen(true);
  };

  const handleEditPatient = (patient) => {
    setCurrentPatient(patient);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSavePatient = async (data) => {
    if (currentPatient) {
      // Update existing patient
      setPatients((prev) =>
        prev.map((p) => (p._id === currentPatient._id ? { ...data, _id: p._id } : p))
      );
      // Send PUT request to update patient in the backend
      await fetch(`http://localhost:3000/patients/${currentPatient._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      // Add new patient
      try {
        const response = await fetch("http://localhost:3000/patients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const newPatient = await response.json(); // Get the newly added patient with its generated ID

        // Update the state to include the new patient
        setPatients((prev) => [...prev, newPatient]);
      } catch (error) {
        console.error("Error adding new patient:", error);
      }
    }

    setModalOpen(false);
  };

  const handleDeletePatient = async (id) => {
    try {
      // Send DELETE request to backend
      await fetch(`http://localhost:3000/patients/${id}`, {
        method: "DELETE",
      });
      console.log("Patient deleted successfully");
      setPatients((prev) => prev.filter((p) => p._id !== id)); // Update state to remove patient
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleUpdatePatient = async (updatedPatient) => {
    try {
      // Send PUT request to backend
      await fetch(
        `http://localhost:3000/patients/${updatedPatient._id}`, // Use _id as identifier
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPatient),
        }
      );

      // Fetch the latest patients data from the backend
      const response = await fetch("http://localhost:3000/patients");
      const updatedPatients = await response.json();
      setPatients(updatedPatients); // Update the state with the latest patients list
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  // Determine the page title based on the current route
  const location = useLocation();
  const pageTitle = location.pathname === "/patients" ? "Patient Details" : "Appointments";

  return (
    <div className="flex min-h-screen bg-blue-100 text-gray-700">
      {/* Sidebar */}
      <div className="fixed inset-0 md:w-64 bg-blue-100 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <Header pageTitle={pageTitle} /> {/* Pass pageTitle as prop */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Navigate to="/patients" />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
