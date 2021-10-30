export default function Lecturehall(props) {
  function deleteHandler() {

  }

  return (
    <div class="h-100 flex justify-center bg-teal-lightest font-sans">
      {/* <h2>{props.text}</h2> */}
      {/* <div >
            <button  onClick={deleteHandler}>Delete</button>
          </div> */}
      <div class="flex mb-4 items-center">
        <p class="w-full text-grey-darkest">{props.text}</p>
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={deleteHandler}>Remove</button>
      </div>
    </div>
  );
}

