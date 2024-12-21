import React from "react";
import { FaTimes, FaPencilAlt } from "react-icons/fa";
const InventoryTable = ({ medicines, onEdit, onDelete }) => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-blue-50">
                    {["Name", "Type", "Price", "In Stock", "Expiry Date", "Manufacturer", "Actions"].map((heading) => (
                        <th key={heading} className="p-3 text-gray-600">
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {medicines.map((medicine) => (
                    <tr key={medicine._id} className="hover:bg-gray-100">
                        <td className="p-3">{medicine.name}</td>
                        <td className="p-3">{medicine.type}</td>
                        <td className="p-3">{medicine.price}</td>
                        <td className="p-3">{medicine.inStock}</td>
                        <td className="p-3">{new Date(medicine.expiryDate).toLocaleDateString()}</td>
                        <td className="p-3">{medicine.manufacturer}</td>
                        <td className="p-3 flex justify-center items-center space-x-2">
                            <button onClick={() => onEdit(medicine)} className="text-green-500 border border-green-500 p-1 rounded-md">
                                <FaPencilAlt />
                            </button>
                            <button onClick={() => onDelete(medicine._id)} className="text-red-500 border border-red-500 p-1 rounded-md">
                                <FaTimes />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default InventoryTable;