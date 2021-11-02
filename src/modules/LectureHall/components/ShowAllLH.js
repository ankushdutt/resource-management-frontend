import { useState, useEffect, useRef } from "react";

export default function ShowAllLH() {
  const [LH, setLH] = useState([{ lh_id: "Fetching data from server..." }]);
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      fetch(`https://lecture-hall-backend.herokuapp.com/lecturehall/all`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setLH(data));
    }
  });
  return (
    <div>
      <div>Show All</div>
      {LH.map((LH) => (
        <div>
          <div>{LH.lh_id}</div>
        </div>
      ))}
    </div>
  );
}
