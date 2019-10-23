import { h, JSX } from "preact";

import * as style from "./style.scss";

export default function Skills(props: {}): JSX.Element {
  const displayCategory = (category: string) => {
    const skillList = skills[category];

    return (
      <div>
        <h2>{category}</h2>
        <ul>
          {skillList.map((skill: string) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section class={style.wrapper}>
      <h1>My Skills</h1>
      {Object.keys(skills).map(category => displayCategory(category))}
    </section>
  );
}

const skills: { [key: string]: string[] } = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Rust",
    "Java",
    "Python",
    "GoLang",
    "Assembly",
    "C++"
  ],
  Frameworks: ["Preact", "React Native", "HapiJS"],
  Technology: [
    "Progressive Web Apps",
    "Distributed Systems",
    "Embedded Systems",
    "Linux",
    "Docker",
    "CI/CD",
    "OAuth 2.0",
    "Web API's"
  ]
};
