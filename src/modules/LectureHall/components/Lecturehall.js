import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Lecturehall.css";

const Lecturehall = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  } 

  function setModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>Lecture Hall{props.id}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Confirm</button>
      </div>
      {modalIsOpen && <Modal onCancel={setModalHandler} onConfirm={setModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={setModalHandler}/>}
    </div>
  );
}

export default Lecturehall;