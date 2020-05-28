import { h, FunctionalComponent } from "preact";

import Header from "./header";
import Entry from "./entry";
import Tags from "./tags";

import educationData from "../data/education.json";
import workData from "../data/work.json";
import extracurricularData from "../data/extracurricular.json";
import sideData from "../data/side.json";
import otherTags from "../data/other.json";

import * as style from "./style.scss";

const App: FunctionalComponent = () => (
	<main id="app" class={style.layout}>
		<Header />
		<Entry title="My Education" data={educationData} />
		<Entry title="My Work Experience" data={workData} />
		<Entry title="My Extracurriculars" data={extracurricularData} />
		<Entry title="My Side Projects" data={sideData} />
		<section>
			<h1>Other Interests</h1>
			<Tags>{otherTags}</Tags>
		</section>
		<section>
			<p>References available upon request.</p>
		</section>
	</main>
);

export default App;
