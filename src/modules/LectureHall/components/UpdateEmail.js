import { useRef } from "react";
export default function UpdateEmail(){
    /*const emailInputRef = useRef();
     const userInputRef = useRef();
  
    var oldE=document.getElementById("oldE").value;
    var newE=document.getElementById("newE").value;
    var confirmE =document.getElementById("confirmE").value;

    if(oldE!=""&&newE!=""&&confirmE!="")
    {
      if(oldE!=newE)
      {
        if(newE==confirmE)
         {
          return true;
         }
         else
          {
            alert("Confirm EMAIL is not same as you new email.");
            return false;
          }
      }
      else
     {
      alert(" This Is Your Old Email,Please Provide A New Email");
      return false;
     }
    }
    else
    {
     alert("All Fields Are Required");
     return false;
    }
    /*const handleEmail = async (e) => {
        e.preventDefault();
        fetch("https://lecture-hall-backend.herokuapp.com/lecturehall/profile", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userInputRef.current.value,
            email: emailInputRef.current.value,
          }),
        }).then((data) => {
          console.log(data);
          if (data.status === 200) {
            setIsLoggedIn(true);
            setIsAdmin(false);
          }
          if (data.status === 201) {
            setIsLoggedIn(true);
            setIsAdmin(true);
          }
        });
      };*/
      return(
        <div className="w-full max-w-xs m-auto mt-64">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Old Email id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oldE"
              type="email"
              placeholder="email"
              //ref={emailInputRef}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Email Id
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="newE"
              type="email"
              placeholder="email"
              //ref={passInputRef}
            />
            <p className="text-red-500 text-xs italic">
              Please enter new email.
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm new Email Id
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmE"
              type="email"
              placeholder="email"
              //ref={passInputRef}
            />
            <p className="text-red-500 text-xs italic">
              Please confirm new email id.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Change Email
            </button>
          </div>
        </form>
      </div>
      );

}
