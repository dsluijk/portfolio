import { h, JSX } from "preact";
import { Route, Router } from "preact-router";

import Profile from "../../routes/profile";
import Home from "../../routes/timeline";
import Header from "../header";

import * as style from "./style.scss";

export default function App(props: {}): JSX.Element {
  return (
    <div class={style.layout}>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </div>
  );
}
