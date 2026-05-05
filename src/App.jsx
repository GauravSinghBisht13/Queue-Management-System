import { useState } from "react";
import Form from "./components/Form";
import Queue from "./components/Queue";
function App() {
  const [queues, setQueue] = useState([]);

  const addToQueue = (info) => {
    setQueue((prev) => [
      ...prev,
      { ...info, id: Date.now(), status: "waiting" },
    ]);
  };

  const updateStatus = ({ id, status }) => {
    setQueue((prevQueues) =>
      prevQueues.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const deleteEntry = ({ id }) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Background color applied here */}
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center">
        {/* Centered and larger headings */}
        <h1 className="text-4xl font-extrabold mt-10 text-center">
          Queue Management System by Gaurav
        </h1>
        <p className="text-xl mt-2 text-center">
          Manage your customers efficiently
        </p>

        <div className="flex justify-center items-start gap-10 mt-10 w-full px-10">
          <Form onAdd={addToQueue} />
          <Queue data={queues} onUpdate={updateStatus} onDelete={deleteEntry} />
        </div>
      </div>
    </>
  );
}

export default App;
