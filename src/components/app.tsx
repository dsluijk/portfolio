import { h, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";

import Header from "./header";
import Entry, { DataEntry } from "./entry";
import Tags from "./tags";

// @ts-ignore Preact-cli handles the import.
import educationData from "../data/education.json";
// @ts-ignore Preact-cli handles the import.
import workData from "../data/work.json";
// @ts-ignore Preact-cli handles the import.
import extracurricularData from "../data/extracurricular.json";
// @ts-ignore Preact-cli handles the import.
import sideData from "../data/side.json";
// @ts-ignore Preact-cli handles the import.
import otherTags from "../data/other.json";

import * as style from "./style.scss";

// tslint:disable-next-line:no-var-requires
if (module.hot) {
  require("preact/debug");
}

export default function App(props: {}): JSX.Element {
  const [education, setEducation] = useState<DataEntry[]>([]);
  const [work, setWork] = useState<DataEntry[]>([]);
  const [extracurricular, setExtracurricular] = useState<DataEntry[]>([]);
  const [side, setSide] = useState<DataEntry[]>([]);

  useEffect(() => {
    loadData(educationData).then(setEducation);
    loadData(workData).then(setWork);
    loadData(extracurricularData).then(setExtracurricular);
    loadData(sideData).then(setSide);
  }, []);

  return (
    <main id="app" class={style.layout}>
      <Header />
      <Entry title="My Education" data={education} />
      <Entry title="My Work Experience" data={work} />
      <Entry title="My Extracurriculars" data={extracurricular} />
      <Entry title="My Side Projects" data={side} />
      <section>
        <h1>Other Interests</h1>
        <Tags>{otherTags}</Tags>
      </section>
      <section>
        <p>References available upon request.</p>
      </section>
    </main>
  );
}

async function loadData(data: object[]): Promise<DataEntry[]> {
  const promises = data.map(async (edu: any) => {
    const img = await import(`../assets/logos/${edu.imagePath}`);

    return {
      title: edu.title,
      institustion: edu.institution,
      description: edu.description,
      image: img.default,
      tags: edu.tags,
      started: edu.started ? new Date(edu.started) : undefined,
      ended: edu.ended ? new Date(edu.ended) : undefined
    };
  });

  return Promise.all(promises);
}
