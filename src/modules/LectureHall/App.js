import { Route, Switch } from "react-router";
import AllocatedLH from "./components/AllocatedLH";
import AvailableLH from "./components/AvailableLH";
import MainNavigation from "./components/MainNavigation";
import ShowAllLH from "./components/ShowAllLH";

export default function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
          <Route path="/lecturehall/all">
            <ShowAllLH />
          </Route>
          <Route path="/lecturehall/available">
            <AvailableLH />
          </Route>
          <Route path="/lecturehall">
            <AllocatedLH />
          </Route>
        </Switch>
    </div>
  );
}
