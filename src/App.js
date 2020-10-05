import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Hello from "./Hello";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import "./styles.css";
import World from "./World";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Hello} exact strict />
          <PrivateRoute path="/world" component={World} exact strict />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
