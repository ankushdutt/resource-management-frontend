import { useRef } from "react";
import { CSVReader } from "react-papaparse";

export default function AdminDashboard() {
  const buttonRef = useRef();
  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  return (
    <div className="w-1/3 m-auto p-2">
      {/* <div className="m-auto">
        Upload Time Table CSV
        <br />
        <input type="file" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Allocate from Time Table
        </button>
      </div> */}
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: "40%",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: "60%",
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          console.log("1");
        }}
      >
        Add, Update and Delete User Accounts
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          console.log("2");
        }}
      >
        Add, Update and Delete Lecture Halls
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          console.log("3");
        }}
      >
        Pending Allocation Requests
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          console.log("4");
        }}
      >
        See and Edit Time Table Allocations or Bookings
      </button>
    </div>
  );
}
