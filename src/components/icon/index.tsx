import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { h, JSX } from "preact";

export default function Icon(props: Props): JSX.Element {
  const definition = props.icon.icon;
  const path =
    typeof definition[4] === "string"
      ? definition[4]
      : definition[4].reduce((c: string, v: string) => `${c} ${v}`, "");

  return (
    <svg viewBox={`0 0 ${definition[0]} ${definition[1]}`}>
      <path d={path} />
    </svg>
  );
}

interface Props {
  icon: IconDefinition;
}
