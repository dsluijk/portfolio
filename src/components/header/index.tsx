import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faHome,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { h, JSX } from "preact";

import { secret } from "../../secret";

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
          {secret.mail.title && (
            <li>
              <a href={secret.mail.link} rel="noreferrer noopener">
                <Icon icon={faEnvelope} />
                <span>{secret.mail.title}</span>
              </a>
            </li>
          )}
          {secret.phone.title && (
            <li>
              <a href={secret.phone.link} rel="noreferrer noopener">
                <Icon icon={faPhoneAlt} />
                <span>{secret.phone.title}</span>
              </a>
            </li>
          )}
          {secret.address.title && (
            <li>
              <a
                href={secret.address.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon={faHome} />
                <span>{secret.address.title}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
