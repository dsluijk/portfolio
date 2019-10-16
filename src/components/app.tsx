import { h, JSX } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

// tslint:disable-next-line:no-var-requires
if (module.hot) require("preact/debug");

export default function App(props: {}): JSX.Element {
  return (
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </div>
  );
}
