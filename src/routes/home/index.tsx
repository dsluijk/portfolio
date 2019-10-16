import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function Home(props: {}): JSX.Element {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
}
