export default function Profile() {
  return (
    <div className="w-1/3 m-auto p-2">
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          // Update profile
        }}
      >
        Update Email and Password
      </button>
      <button
        className="w-full bg-blue-500 rounded p-3 m-3"
        onClick={() => {
          // Update mobile number
        }}
      >
        Update Mobile Number
      </button>
      <button
        className="w-full bg-red-500 rounded p-3 m-3"
        onClick={() => {
          // Delete Account
        }}
      >
        Delete Account
      </button>
    </div>
  );
}