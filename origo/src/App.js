import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Account from "./pages/Account";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/Games" component={Games} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Account" component={Account} />
    </div>
  );
}
