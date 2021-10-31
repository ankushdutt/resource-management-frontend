import Lecturehall from "./Lecturehall";
import { useState } from "react";

export default function AllocatedLH() {
  const [allocatedLH, setAllocatedLH] = useState([1, 5, 7]);

  function deleteHandler(id) {
    setAllocatedLH(allocatedLH.filter((lh) => lh !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="py-5">Lecture Halls Allocated to you:</h1>
      {allocatedLH.map((lh) => (
        <div>
          <Lecturehall key={lh} id={lh} />
          <button
            className="p-2 border-2 rounded text-red border-red hover:text-red-400 mb-2"
            onClick={() => deleteHandler(lh)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
