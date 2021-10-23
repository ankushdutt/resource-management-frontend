import Employee from "./components/Employee";
import Inventory from "./components/Inventory";
import Exam from "./components/Exam";
import LectureHall from "./components/LectureHall";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          LNMIIT Resource Management System
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Employee />
          <Inventory />
          <LectureHall />
          <Exam />
        </div>
      </main>
    </div>
  );
}

export default App;
