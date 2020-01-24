import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";

import Typecode from "./api/Typecode";
import Reqres from "./api/Reqres";

const Main = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/typecode" component={Typecode} />
      <Route exact path="/reqres" component={Reqres} />
    </Switch>
  </React.Fragment>
);

export default Main;
