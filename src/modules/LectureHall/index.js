import { Switch, Route } from "react-router-dom";
import SearchLH from "./components/SearchLH";
import AllocatedLH from "./components/AllocatedLH";
import App from "./App";

export default function index() {
  return (
    <Switch>
      <Route path="/lecturehall/search">
        <SearchLH />
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
