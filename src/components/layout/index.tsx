import { h, JSX } from "preact";

import Header from "../header";
import Skills from "../skills";
import Timeline from "../timeline";

import * as style from "./style.scss";

export default function App(props: {}): JSX.Element {
  return (
    <div class={style.layout}>
      <Header />
      <Skills />
      <Timeline />
    </div>
  );
}
