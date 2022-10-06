import { Redirect, Route } from "react-router";
import Home from "../pages/Home";

const Routes = () => (
  <>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </>
);

export default Routes;
