import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginform from "./components/loginform";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import admin from "./components/admin";
// import RightSide from "./components/RightSide";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/loginform" component={loginform}>
          {" "}
        </Route>
        <Route exact path="/admin" component={admin}>
          {" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
