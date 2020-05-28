import { h, JSX, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

import Tags from "../tags";
import { DataTypes } from "~dataTypes";

const Entry: FunctionalComponent<RenderableProps<Props>> = (props: Props) => {
	const getDate = (start?: string, end?: string): string => {
		let out = "";
		const startDate = start ? new Date(start) : undefined;
		const endDate = end ? new Date(end) : undefined;

		if (start) {
			out += `${months[startDate.getMonth()]} ${startDate.getFullYear()} to `;
		} else {
			out += "Finished in ";
		}

		if (end) {
			out += `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
		} else {
			out += "now";
		}

		return out;
	};

	const renderEntry = (entry: DataTypes): JSX.Element => (
		<div class={style.wrapper}>
			<div>
				<img
					class={style.image}
					src={`logos/${entry.imagePath}`}
					alt={entry.title}
				/>
			</div>
			<div>
				<h1>{entry.title}</h1>
				<h2>{entry.institution}</h2>
				<div>
					<span class={style.date}>{getDate(entry.started, entry.ended)}</span>{" "}
					- {entry.description}
				</div>
				<Tags>{entry.tags}</Tags>
			</div>
		</div>
	);

	return (
		<section>
			<h1>{props.title}</h1>
			<div>{props.data.map((entry) => renderEntry(entry))}</div>
		</section>
	);
};

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

interface Props {
	title: string;
	data: DataTypes[];
}

export default Entry;
