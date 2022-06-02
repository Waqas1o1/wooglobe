import React from "react";
import HomePage from "./pages/HomePage";
import { Routes as Switch, Route } from "react-router-dom";

export const siteMap = {
  HomePage: {
    title: "Home",
    path: "/",
    description: "My home page",
  },
};
const Routes = () => (
  <Switch>
    <Route exact path={siteMap.HomePage.path} element={<HomePage />} />
  </Switch>
);

export default Routes;
