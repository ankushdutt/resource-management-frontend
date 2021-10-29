import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Hello from Lecture Hall. Edit this in src/modules/LectureHall/index.js
      <Link className="text-blue-500 mt-4" to="/lecturehall/search">
        Search
      </Link>
      <Link className="text-blue-500 mt-4" to="/lecturehall/allocated">
        Allocated
      </Link>
      <Link className="text-blue-500 mt-4" to="/">
        Back
      </Link>
    </div>
  );
}
