import { Route, Switch, Redirect } from "react-router";
import { useState } from "react";
import AllocatedLH from "./components/AllocatedLH";
import AvailableLH from "./components/AvailableLH";
import MainNavigation from "./components/MainNavigation";
import ShowAllLH from "./components/ShowAllLH";
import Login from "./components/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn && <MainNavigation setIsLoggedIn={setIsLoggedIn} />}
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
      </Switch>
    </div>
  );
}
