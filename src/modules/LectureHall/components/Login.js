import { Redirect } from "react-router";
import { useRef } from "react";

export default function Login({ setIsLoggedIn }) {

  const emailInputRef = useRef();
  const passInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    // if (emailInputRef.current.value === 'lecturehall@gmail.com' && passInputRef.current.value === 'lecturehall') {
    setIsLoggedIn(true);
    <Redirect to="/lecturehall/allocated" />;

  }
  return (
    <div className="w-full max-w-xs m-auto mt-64">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Email id
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" ref={emailInputRef} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" ref={passInputRef} />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
