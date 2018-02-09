import React from "react";
import { Route, IndexRoute } from "react-router";

import app from "./components/app";
import HomeContainer from "./components/HomeContainer";

export default (
  <div>
    <Route path="/" component={app}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </div>
);
