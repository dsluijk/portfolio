import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function Header(props: {}): JSX.Element {
  return (
    <header class={style.header}>
      <img src="../../assets/face.png" alt="Headshot" class={style.image} />
      <div class={style.profile}>
        <h1>Hi, I'm Dany.</h1>
        <h2>Bachelor student Computer Science &amp; Engineering</h2>
        <p>I like to simplify and speed up the web.</p>
      </div>
    </header>
  );
}
