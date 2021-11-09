import Lecturehall from "./Lecturehall";
import { useState, useEffect, useRef } from "react";

export default function AllocatedLH() {
  const [allocatedLH, setAllocatedLH] = useState([1, 5, 7]);
  const [toDel, setToDel] = useState();
  const didMount = useRef(false);

  function deleteHandler(id) {
    setAllocatedLH(allocatedLH.filter((lh) => lh !== id));
    setToDel(id);
  }

  useEffect(() => {
    if (didMount.current) {
      fetch(`https://lecture-hall-backend.herokuapp.com/allocation/${toDel}`, {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then((data) => alert(data));
    } else {
      didMount.current = true;
    }
  }, [toDel]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="py-5">Lecture Halls Allocated to you:</h1>
      {allocatedLH.map((lh) => (
        <div key={lh}>
          <Lecturehall id={lh} />
          {/* <button
            className="p-2 border-2 rounded text-red border-red hover:text-red-400 mb-2"
            onClick={() => deleteHandler(lh)}
          >
            Remove
          </button> */}
        </div>
      ))}
    </div>
  );
}
