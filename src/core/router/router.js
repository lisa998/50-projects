import { Switch, Route } from "react-router-dom";
import { routes } from "./route";
import React, { Suspense } from "react";

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((ele, i) => (
          <Route {...ele} key={i}></Route>
        ))}
      </Switch>
    </Suspense>
  );
}
