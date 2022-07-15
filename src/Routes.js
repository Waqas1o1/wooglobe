import React from "react";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library/Library";
import { Routes as Switch, Route } from "react-router-dom";

export const siteMap = [
  {
    title: "HOME",
    exact: true,
    path: "/",
    element: <HomePage />,
    description: "My home page",
  },
  {
    title: "LIBRARAY",
    exact: true,
    path: "/library",
    element: <Library />,
    description: "My home page",
  },
];
const Routes = () => (
  <Switch>
    {siteMap.map((page, index) => (
      <Route
        key={index}
        exact={page.exact}
        path={page.path}
        element={page.element}
      />
    ))}
  </Switch>
);

export default Routes;
