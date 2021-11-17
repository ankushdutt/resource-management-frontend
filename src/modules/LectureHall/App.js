import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import AllocatedLH from "./components/AllocatedLH";
import AvailableLH from "./components/AvailableLH";
import ShowAllLH from "./components/ShowAllLH";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Switch>
        <Route exact path="/lecturehall">
          {isLoggedIn ? (
            <Redirect to="/lecturehall/allocated" />
          ) : (
            <Redirect to="/lecturehall/login" />
          )}
        </Route>
        <Route path="/lecturehall/login">
          {!isLoggedIn ? (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Redirect to="/lecturehall/allocated" />
          )}
        </Route>
        <Route path="/lecturehall/all">
          {isLoggedIn ? <ShowAllLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/available">
          {isLoggedIn ? <AvailableLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/allocated">
          {isLoggedIn ? <AllocatedLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/profile">
          {isLoggedIn ? <Profile /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/admin">
          {isLoggedIn ? (
            <AdminDashboard />
          ) : (
            <Redirect to="/lecturehall/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
}
