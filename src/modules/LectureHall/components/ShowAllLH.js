import { useState, useEffect } from "react";

export default function ShowAllLH() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchServerData = async () => {
    fetch(`https://lecture-hall-backend.herokuapp.com/lecturehall/all`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);
  };

  useEffect(() => fetchServerData(), []);

  return (
    <div>
      <div>Show All</div>

      {isLoading || !data ? (
        <div>Fetching lecture halls data from server...</div>
      ) : (
        <div>
          {data.map((obj) => (
            <div key={obj.lh_id}>
              <div>ID: {obj.lh_id}</div>
              <div>Max Capacity: {obj.max_capacity}</div>
              <div>
                Director Permission required:
                {obj.special_permission_req ? " Yes" : " No"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
