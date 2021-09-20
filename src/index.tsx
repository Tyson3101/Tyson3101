import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import HomePage from "./Home";
import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* About Route */}
        <Route exact path="/about">
          <About />
        </Route>
        {/* HomePage Route */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
