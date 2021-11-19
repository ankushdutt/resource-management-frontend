import { useState, useRef } from "react";

export default function AvailableLH() {

  const dateInputRef = useRef();
  const fromTimeInputRef = useRef();
  const toTimeInputRef = useRef();
  const capacityInputRef = useRef();

  const lecturehall = [
    {
      id: 5,
      max_capacity: 100,
      permission_req: 'Yes',
      status: 'Available',
      time_from: '3:00PM',
      time_to: '4:00PM',
      },
    {
      id: 2,
      max_capacity: 100,
      permission_req: 'No',
      status: 'Available',
      time_from: '1:00PM',
      time_to: '2:00PM',
      },
    {
      id: 9,
      max_capacity: 200,
      permission_req: 'Yes',
      status: 'Available',
      time_from: '5:00PM',
      time_to: '6:00PM',
      }
  ]

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form class="w-full max-w-7xl	mx-16 my-16" onSubmit={submitHandler}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" ref={dateInputRef} />
          </div>
          <div class="w-full md:w-1/5 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Time From
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="time" ref={fromTimeInputRef} />
          </div>
          <div class="w-full md:w-1/5 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Time To
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="time" ref={toTimeInputRef} />
          </div>
          <div class="w-full md:w-1/5 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Required Capacity
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" ref={capacityInputRef} />
          </div>
          <div className="w-full my-5 md:w-auto px-3 bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">
            <button >search</button>
          </div>
        </div>
      </form>

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
                  {lecturehall.map((lt) => (
                    <tr key={lt.id}>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">LT-{lt.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{lt.max_capacity}</div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{lt.permission_req}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{lt.time_from}-{lt.time_to}</td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {lt.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 mx-6 hover:text-indigo-900">
                          Book
                        </a>
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
