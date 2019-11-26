import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function Tags(props: Props): JSX.Element {
  return (
    <ul class={style.wrapper}>
      {props.children.map(tag => (
        <li class={style.tag}>{tag}</li>
      ))}
    </ul>
  );
}

interface Props {
  children: string[];
}
