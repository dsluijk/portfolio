import { h, JSX } from "preact";

import TimeEntry from "../../components/timeEntry";
import * as style from "./style.scss";

export default function Home(props: {}): JSX.Element {
  return (
    <main class={style.timeline}>
      <TimeEntry
        title="Volunteer Reseacher"
        institution="Tribler"
        image="../../assets/logos/tribler.png"
        startDate={new Date("2019-02")}
      >
        After winning a competition at a course at my university, I was invited
        to join some projects at the Distributed Systems group from the Delft
        University of Technology. Now I do research on protecting distributed
        systems from Sybil attacks.
      </TimeEntry>
      <TimeEntry
        title="BSc Computer Science &amp; Engineering"
        institution="Delft University of Engineering"
        image="../../assets/logos/tudelft.png"
        startDate={new Date("2018-09")}
      >
        This is my current major, where I'm currently doing the Systems variant.
        In the first year I won a competition by creating the fastest JIT
        compiler for Brainfuck in Assembly of my year. It ran Towers of Hanoi in
        60ms on average. This lead to some extracurricular activities at
        Tribler.
      </TimeEntry>
      <TimeEntry
        title="Voortentamen Wiskunde B"
        institution="Centrale Commissies Voortentamen"
        image="../../assets/logos/ccvx.png"
        endDate={new Date("2018-07")}
      >
        To be admitted to the Delft University of Technology I had to eliminate
        a deficiency in mathematics. This certificate would proof that my math
        was on a sufficient level to start the year. I passed the exam with a 7.
      </TimeEntry>
      <TimeEntry
        title="Fullstack Engineer"
        institution="E-fulfillers"
        image="../../assets/logos/efulfillers.png"
        startDate={new Date("2018-11")}
      >
        This is a software consultancy in a webshop warehouse. Here I
        successfully build and implemented a app to improve the workflow for
        warehouse management. The most important daily tasks of the warehouse
        were implemented inside of the app. This improved the speed and decresed
        the amount of errors dramatically.
      </TimeEntry>
      <TimeEntry
        title="BSc HBO-ICT"
        institution="University of Applied Sciences Utrecht"
        image="../../assets/logos/hu.png"
        startDate={new Date("2016-09")}
        endDate={new Date("2017-11")}
      >
        After highschool I started at this University. I scored above average at
        almost all courses. At the end of the year I was nominated to start
        Honours track. Despite that I didn't feel like I was being challenged at
        this University, so in the start of the second year I left to pursue a
        similar Bachelor at the Delft University of Technology.
      </TimeEntry>
    </main>
  );
}
