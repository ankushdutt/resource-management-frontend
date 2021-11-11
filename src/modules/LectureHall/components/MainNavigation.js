import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation({ setIsLoggedIn }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Lecture Hall Management</div>
      <nav>
        <ul>
          <li>
            <Link to="/lecturehall/allocated">Allocated Lecture Halls</Link>
          </li>
          <li>
            <Link to="/lecturehall/available">Available Lecture Halls</Link>
          </li>
          <li>
            <Link to="/lecturehall/all">All Lecture Halls</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLoggedIn(false);
              }}
              className="border-0 text-2xl"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
