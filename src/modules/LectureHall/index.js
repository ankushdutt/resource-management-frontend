import { Switch, Route } from "react-router-dom";
import ShowAllLH from "./components/ShowAllLH";
import AllocatedLH from "./components/AllocatedLH";
import App from "./App";

export default function index() {
  return (
    <Switch>
      <Route path="/lecturehall/all">
        <ShowAllLH />
      </Route>
      <Route path="/lecturehall/allocated">
        <AllocatedLH />
      </Route>
      <Route path="/lecturehall">
        <App />
      </Route>
    </Switch>
  );
}
