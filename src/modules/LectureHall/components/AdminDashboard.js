export default function AdminDashboard() {
  return (
    <div className="w-1/3 m-auto p-2">
      <div className="m-auto">
        Upload Time Table CSV
        <input type="file" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Allocate from Time Table
        </button>
      </div>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          console.log("1");
        }}
      >
        Add, Update and Delete User Accounts
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          console.log("2");
        }}
      >
        Add, Update and Delete Lecture Halls
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          console.log("3");
        }}
      >
        Pending Allocation Requests
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          console.log("4");
        }}
      >
        See and Edit Time Table Allocations or Bookings
      </button>
    </div>
  );
}
