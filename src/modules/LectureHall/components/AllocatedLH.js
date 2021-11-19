import Lecturehall from "./Lecturehall";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Lecturehall.css";

export default function AllocatedLH() {
  const [allocatedLH, setAllocatedLH] = useState([1, 5, 7]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDel, setToDel] = useState();
  const didMount = useRef(false);

  function deleteHandler(id) {
    setAllocatedLH(allocatedLH.filter((lh) => lh !== id));
    setToDel(id);
    setModalIsOpen(false);
  }

  function setModalHandler() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (didMount.current) {
      fetch(`https://lecture-hall-backend.herokuapp.com/allocation/${toDel}`, {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then((data) => alert(data));
    } else {
      didMount.current = true;
    }
  }, [toDel]);

  return (
    <div>
      <h1 className="py-5 mx-16">Lecture Halls Allocated to you:-</h1>
      <div className="flex flex-col mx-16">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Lecture Hall
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Maximum Capacity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Director's Permission Required
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time Slot
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-3 py-3">
                      <span className="sr-only">Book</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allocatedLH.map((lt) => (
                    <tr key={lt}>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">LT-{lt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">200</div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">No</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">3:00PM-4:00PM</td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Available
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 mx-6 hover:text-indigo-900" onClick={() => setModalIsOpen(true)}>
                          Remove
                        </button>
                        {modalIsOpen && (
                          <Modal
                            onCancel={setModalHandler}
                            onConfirm={() => deleteHandler(lt)}
                          />
                        )}
                        {modalIsOpen && <Backdrop onClick={setModalHandler} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
