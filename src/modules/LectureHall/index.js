import ReactDOM from "react-dom";
import App from "./App";

export default function index() {
  return (
    <div>
      <button
        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600"
        onClick={() => {
          ReactDOM.render(<App />, document.getElementById("root"));
        }}
      >
        <h3 className="text-2xl font-bold">Lecture Hall Management &rarr;</h3>
        <p className="mt-4 text-xl">
          Edit this text in /src/modules/LectureHall/index.js
        </p>
      </button>
    </div>
  );
}
