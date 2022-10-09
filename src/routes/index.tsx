import { Redirect, Route } from "react-router";

import Login from "../pages/Login";
import SelectDivisions from "pages/SelectDivisions";

const Routes = () => (
  <>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/select-divisions">
      <SelectDivisions />
    </Route>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </>
);

export default Routes;
