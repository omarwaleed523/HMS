import React, { useState, useEffect } from "react";
const MedicineModal = ({ isOpen, onClose, onSubmit, medicine }) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "tablet",
        price: "",
        inStock: "",
        expiryDate: "",
        manufacturer: "",
    });
    useEffect(() => {
        if (medicine) {
            setFormData({
                ...medicine,
                expiryDate: new Date(medicine.expiryDate).toISOString().split('T')[0],
            });
        } else {
            setFormData({
                name: "",
                type: "tablet",
                price: "",
                inStock: "",
                expiryDate: "",
                manufacturer: "",
            });
        }
    }, [medicine]);
    if (!isOpen) return null;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                <h2 className="text-xl font-bold mb-4">{medicine ? "Edit Medicine" : "New Medicine"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Medicine Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    >
                        <option value="syrup">Syrup</option>
                        <option value="tablet">Tablet</option>
                        <option value="capsule">Capsule</option>
                        <option value="injection">Injection</option>
                        <option value="soap">Soap</option>
                        <option value="inhaler">Inhaler</option>
                    </select>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    <input
                        type="number"
                        name="inStock"
                        placeholder="In Stock"
                        value={formData.inStock}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        name="manufacturer"
                        placeholder="Manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-md"
                        required
                    />
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            {medicine ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default MedicineModal;