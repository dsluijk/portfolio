import { h, JSX } from "preact";
import { Route, Router } from "preact-router";

import Home from "../../routes/home";
import Profile from "../../routes/profile";
import Header from "../header";

import * as style from "./style.scss";

// tslint:disable-next-line:no-var-requires
if (module.hot) { require("preact/debug"); }

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
