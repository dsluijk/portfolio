import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function Header(props: {}): JSX.Element {
  return (
    <header class={style.header}>
      <img src="../../assets/face.png" alt="Headshot" class={style.image} />
      <div class={style.profile}>
        <h1>Hi, I'm Dany Sluijk</h1>
        profile thing
      </div>
    </header>
  );
}
