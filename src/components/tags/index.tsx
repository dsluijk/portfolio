import { h, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

const Tags: FunctionalComponent<RenderableProps<Props>> = (props) => (
	<ul class={style.wrapper}>
		{props.children.map((tag) => (
			<li class={style.tag}>{tag}</li>
		))}
	</ul>
);

interface Props {
	children: string[];
}

export default Tags;
