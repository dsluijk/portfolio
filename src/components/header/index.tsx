import {
	faGithub,
	IconDefinition,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
	faPhoneAlt,
	faHome,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { h, JSX, FunctionalComponent } from "preact";

import Icon from "../icon";
import { secret } from "../../secret";

import * as style from "./style.scss";

const Header: FunctionalComponent = () => {
	const renderItem = (
		title: string,
		icon: IconDefinition,
		url: string
	): JSX.Element => (
		<li>
			<a href={url} rel="noreferrer noopener" target="_blank">
				<Icon icon={icon} />
				<span>{title}</span>
			</a>
		</li>
	);

	return (
		<header class={style.header}>
			<div class={style.image}>
				<img src="face.png" alt="Dany" />
			</div>
			<div class={style.profile}>
				<h1>Hi, I'm Dany.</h1>
				<h2>Bachelor student Computer Science &amp; Engineering</h2>
				<ul>
					{renderItem("dsluijk", faGithub, "https://github.com/dsluijk/")}
					{renderItem(
						"danysluijk",
						faLinkedin,
						"https://www.linkedin.com/in/danysluijk/"
					)}
					{secret.mail.title &&
						renderItem(secret.mail.title, faEnvelope, secret.mail.link)}
					{secret.phone.title &&
						renderItem(secret.phone.title, faPhoneAlt, secret.phone.link)}
					{secret.address.title &&
						renderItem(secret.address.title, faHome, secret.address.link)}
				</ul>
			</div>
		</header>
	);
};

export default Header;
