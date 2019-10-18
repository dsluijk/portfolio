import {
  faGithub,
  faLinkedin,
  faTelegram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { h, JSX } from "preact";

import Icon from "../icon";

import * as style from "./style.scss";

export default function Header(props: {}): JSX.Element {
  return (
    <header class={style.header}>
      <div class={style.image}>
        <img src="../../assets/face.png" alt="Headshot" />
      </div>
      <div class={style.profile}>
        <h1>Hi, I'm Dany.</h1>
        <h2>Bachelor student Computer Science &amp; Engineering</h2>
        <ul>
          <li>
            <a href="https://github.com/dsluijk/">
              <Icon icon={faGithub} />
              <span>dsluijk</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/danysluijk/">
              <Icon icon={faLinkedin} />
              <span>danysluijk</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/dsluijk/">
              <Icon icon={faTelegram} />
              <span>dsluijk</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dsluijk/">
              <Icon icon={faTwitter} />
              <span>dsluijk</span>
            </a>
          </li>
          <li>
            <Icon icon={faKey} />
            <span>E54E6E3247A4342A</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
