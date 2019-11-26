import { h, JSX } from "preact";

import * as style from "./style.scss";

import Tags from "../tags";

export default function Entry(props: Props): JSX.Element {
  return (
    <section>
      <h1>{props.title}</h1>
      <div>
        {props.data.map(entry => (
          <div class={style.wrapper}>
            <div>
              <img class={style.image} src={entry.image} alt={entry.title} />
            </div>
            <div>
              <h1>{entry.title}</h1>
              <h2>{entry.institustion}</h2>
              <div>
                <span class={style.date}>
                  {getDate(entry.started, entry.ended)}
                </span>{" "}
                - {entry.description}
              </div>
              <Tags>{entry.tags}</Tags>
            </div>
          </div>
        ))}
        {props.data.length === 0 && "Loading your data.."}
      </div>
    </section>
  );
}

interface Props {
  title: string;
  data: DataEntry[];
}

export interface DataEntry {
  title: string;
  institustion: string;
  description: string;
  image: string;
  tags: string[];
  started?: Date;
  ended?: Date;
}

function getDate(start?: Date, end?: Date): string {
  let out = "";

  if (start) {
    out += `${months[start.getMonth()]} ${start.getFullYear()} to `;
  } else {
    out += "Finished in ";
  }

  if (end) {
    out += `${months[end.getMonth()]} ${end.getFullYear()}`;
  } else {
    out += "now";
  }

  return out;
}

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
  "Dec"
];
