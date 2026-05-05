import { useState } from "react";
import "../index.css";

export default function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  function handleSubmit(e) {
    console.log(onAdd);
    e.preventDefault();

    if (!name || !service) return window.alert("Enter value please");

    onAdd({ name, service });
    setName("");
    setService("");
  }

  return (
    <div className="h-screen flex items-center ">
      <div className="bg-[#1e293b] p-6 rounded-2xl w-80 shadow-lg">
        <h1 className="text-blue-500 text-lg font-semibold mb-4">
          Add to Queue
        </h1>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#0f172a] text-white border border-gray-600 rounded-md p-2 outline-none focus:border-blue-500"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="bg-[#0f172a] text-gray-400 border border-gray-600 rounded-md p-2 outline-none focus:border-blue-500"
          >
            <option>Select Service</option>
            <option>Payment</option>
            <option>Service</option>
            <option>Maintenance</option>
            <option>Buy</option>
          </select>

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
          >
            👤 Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}
