import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "@statics/routes";
import Timeline from "@pages/Timeline";
import Home from "@pages/Home";
import Project from "@pages/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.TIMELINE} exact component={Timeline} />
          <Route path={routes.PROJECT.PATH} exact component={Project} />
          <Route path={routes.HOME} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;