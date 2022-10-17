import { Redirect, Route } from "react-router";

import Login from "../pages/Login";
import SelectTraining from "pages/SelectTraining";
import SelectDivisions from "pages/SelectDivisions";

const Routes = () => (
  <>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/select-divisions">
      <SelectDivisions />
    </Route>
    <Route exact path="/select-training">
      <SelectTraining />
    </Route>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </>
);

export default Routes;
