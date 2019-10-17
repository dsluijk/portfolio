import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function TimeEntry(props: Props): JSX.Element {
  let dateString = "";

  if (props.startDate) {
    dateString += `${
      months[props.startDate.getMonth()]
    } ${props.startDate.getFullYear()} to `;
  } else {
    dateString += "Obtained at ";
  }

  if (props.endDate) {
    dateString += `${
      months[props.endDate.getMonth()]
    } ${props.endDate.getFullYear()}`;
  } else {
    dateString += "now";
  }

  return (
    <div class={style.entry}>
      <span class={style.imageWrapper}>
        <img src={props.image} alt={props.institution} />
      </span>
      <span class={style.description}>
        <h2>{props.title}</h2>
        <h3>
          {props.institution} | {dateString}
        </h3>
        <p>{props.children}</p>
      </span>
    </div>
  );
}

interface Props {
  title: string;
  institution: string;
  image: string;
  startDate?: Date;
  endDate?: Date;
  children: string;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
