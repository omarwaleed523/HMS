import React from "react";

const AppointmentsTable = () => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-gray-500">
          <th className="py-2">Time</th>
          <th>Date</th>
          <th>Patient Name</th>
          <th>Patient Age</th>
          <th>Doctor</th>
          <th>User Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="py-2">9:30 AM</td>
          <td>05/12/2022</td>
          <td>Elizabeth Polson</td>
          <td>32</td>
          <td>Dr. John</td>
          <td>
            <button className="text-blue-500">Reschedule</button>
            <button className="text-red-500 ml-3">✕</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AppointmentsTable;
