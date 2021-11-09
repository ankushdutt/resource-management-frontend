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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="py-5">Lecture Halls Allocated to you:-</h1>
      {allocatedLH.map((lh) => (
        <div key={lh} className='card'>
          <Lecturehall id={lh} />
          <div className='actions'>
          <button
            className="btn"
            onClick={() => setModalIsOpen(true)}
          >
            Remove
          </button>
          </div>
          {modalIsOpen && <Modal onCancel={setModalHandler} onConfirm={()=>deleteHandler(lh)}/>}
          {modalIsOpen && <Backdrop onClick={setModalHandler}/>}
        </div>
      ))}
    </div>
  );
}
