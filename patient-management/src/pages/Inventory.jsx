// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import InventoryTable from "../components/InventoryTable";
import MedicineModal from "../components/MedicineModal";
const Inventory = () => {
    const [medicines, setMedicines] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentMedicine, setCurrentMedicine] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await fetch("http://localhost:3003/inventory");
                const data = await response.json();
                setMedicines(data);
            } catch (error) {
                console.error("Error fetching medicines:", error);
            }
        };
        fetchMedicines();
    }, []);
    const handleAddMedicine = () => {
        setCurrentMedicine(null);
        setModalOpen(true);
    };
    const handleEditMedicine = (medicine) => {
        setCurrentMedicine(medicine);
        setModalOpen(true);
    };
    const handleDeleteMedicine = async (id) => {
        try {
            await fetch(`http://localhost:3003/inventory/${id}`, {
                method: "DELETE",
            });
            setMedicines((prev) => prev.filter((med) => med._id !== id));
        } catch (error) {
            console.error("Error deleting medicine:", error);
        }
    };
    const handleSaveMedicine = async (medicine) => {
        if (currentMedicine) {
            // Update existing medicine
            await fetch(`http://localhost:3003/inventory/${currentMedicine._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(medicine),
            });
            const response = await fetch("http://localhost:3003/inventory");
            const updatedMedicines = await response.json();
            setMedicines(updatedMedicines);
        } else {
            // Add new medicine
            const response = await fetch("http://localhost:3003/inventory", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(medicine),
            });
            const newMedicine = await response.json();
            setMedicines((prev) => [...prev, newMedicine]);
        }
        setModalOpen(false);
    };
    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded-md w-1/3"
                />
                <button
                    onClick={handleAddMedicine}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Add Medicine
                </button>
            </div>
            <InventoryTable
                medicines={filteredMedicines}
                onEdit={handleEditMedicine}
                onDelete={handleDeleteMedicine}
            />
            {isModalOpen && (
                <MedicineModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleSaveMedicine}
                    medicine={currentMedicine}
                />
            )}
        </div>
    );
};
export default Inventory;