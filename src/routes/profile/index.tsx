import { h, JSX } from "preact";
import { useState } from "preact/hooks";

import * as style from "./style.scss";

export default function Profile(props: Props): JSX.Element {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  setInterval(() => {
    setTime(Date.now());
  }, 1000);

  return (
    <div class={style.profile}>
      <h1>Profile: {props.user}</h1>
      <p>This is the user profile for a user named {props.user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={() => setCount(count + 1)}>Click Me</button> Clicked{" "}
        {count} times.
      </p>
    </div>
  );
}

interface Props {
  user: string;
}
