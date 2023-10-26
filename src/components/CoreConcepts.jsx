import { CORE_CONCEPTS } from "../util/core-concepts";
import CoreConcept from "./CoreConcept";

export default function () {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <li key={item.key}>
            <CoreConcept
              title={item.title}
              description={item.description}
              img={item.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
