import React, { useState } from "react";

export default function StatusSelector({ currentStatus }) {
  const [status, setStatus] = useState(currentStatus);
  return (
    <select
      className="bg-homeBg px-3 py-2 rounded-md text-white"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value={"Pending"}>Pending</option>
      <option value={"Completed"}>Completed</option>
      <option value={"Failed"}>Failed</option>
    </select>
  );
}
