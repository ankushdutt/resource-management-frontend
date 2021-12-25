export default function Profile() {
  return (
    <div className="w-1/3 m-auto p-2">
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          // Update profile
        }}
      >
        Update Email and Password
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          // Update mobile number
        }}
      >
        Update Mobile Number
      </button>
      <button
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded p-3 m-3"
        onClick={() => {
          // Delete Account
        }}
      >
        Delete Account
      </button>
    </div>
  );
}
