import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";

const Main = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/api" component={Home} />
    </Switch>
  </React.Fragment>
);

export default Main;
