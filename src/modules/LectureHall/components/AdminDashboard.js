export default function AdminDashboard() {
  return (
    <div className="w-1/3 m-auto p-2">
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          console.log("1");
        }}
      >
        Add, Update and Delete User Accounts
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          console.log("2");
        }}
      >
        Add, Update and Delete Lecture Halls
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          console.log("3");
        }}
      >
        Pending Allocation Requests
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          console.log("4");
        }}
      >
        See and Edit Time Table Allocations or Bookings
      </button>
    </div>
  );
}
