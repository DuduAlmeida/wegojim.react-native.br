import { Redirect, Route } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { Exercises } from "pages/Exercises";
import SelectTraining from "pages/SelectTraining";
import SelectDivisions from "pages/SelectDivisions";

import { AuthContextProvider } from "contexts/AuthContext";

const Routes = () => (
  <AuthContextProvider>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/select-divisions">
      <SelectDivisions />
    </Route>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/select-training">
      <SelectTraining />
    </Route>
    <Route exact path="/do-exercises/:exerciseId">
      <Exercises />
    </Route>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </AuthContextProvider>
);

export default Routes;
