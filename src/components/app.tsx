import { h, JSX } from "preact";

import Header from "./header";
import Skills from "./skills";
import Timeline from "./timeline";

import * as style from "./style.scss";

// tslint:disable-next-line:no-var-requires
if (module.hot) { require("preact/debug"); }

export default function App(props: {}): JSX.Element {
  return (
    <main id="app" class={style.layout}>
      <Header />
      <Skills />
      <Timeline />
    </main>
  );
}
