export default function Queue({ data, onUpdate, onDelete }) {
  console.log("here is the queue data ", data);

  function onUpdateStatus(id) {
    onUpdate({ id: id, status: "in process" });
  }

  function onDeleteStatus(id) {
    onDelete({ id: id });
  }

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl w-[60%] h-80 shadow-lg flex flex-col text-white self-center">
      {data.length === 0 ? (
        <h1>No Customers in Queue</h1>
      ) : (
        <div className="flex flex-col h-full">
          <h1 className="mb-4">Manage Customers</h1>

          {/* Scrollable but hidden scrollbar */}
          <div className="space-y-4 overflow-y-scroll max-h-[calc(100%-2rem)] pr-2 scrollbar-hide">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 text-white p-6 rounded-lg shadow-md flex justify-between items-center"
              >
                {/* Left side: customer info */}
                <div>
                  <p className="text-xl font-bold mb-2">{item.name}</p>
                  <p className="text-lg mb-1">Service: {item.service}</p>
                  <p
                    className={`font-semibold ${
                      item.status.toLowerCase() === "completed"
                        ? "text-green-500"
                        : item.status.toLowerCase() === "pending"
                          ? "text-yellow-400"
                          : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>

                {/* Right side: action buttons */}
                <div className="flex space-x-2">
                  {item.status === "in process" ? null : (
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      onClick={() => onUpdateStatus(item.id)}
                    >
                      Serve
                    </button>
                  )}

                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => onDeleteStatus(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
