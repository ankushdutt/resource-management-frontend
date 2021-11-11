import { Redirect } from "react-router";

export default function Login({ setIsLoggedIn }) {
  return (
    <div>
      Login
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoggedIn(true);
          <Redirect to="/lecturehall/allocated" />;
        }}
      >
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="password" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
