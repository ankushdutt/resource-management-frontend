import { Link } from "react-router-dom";
import AvailableLT from "./components/AvailableLT";

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Hello from Lecture Hall. Edit this in src/modules/LectureHall/index.js

      <Link to="/lecturehall/availablelt">
        <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600">
          <h3 className="text-2xl font-bold">
            Available Lecture halls
          </h3>
          <p className="mt-4 text-xl">Edit this text in /src/Home.js</p>
        </button>
      </Link>
      <AvailableLT />
      <Link className="text-blue-500 mt-4" to="/">
        Back
      </Link>
    </div>
  );
}
