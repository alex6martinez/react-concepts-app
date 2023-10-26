import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./util/core-concepts";

function App() {
  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
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
        <section id="examples">
          <h2 style={{ textAlign: "center" }}>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent ? (
            <div id="tab-content">
              <h3 style={{ textAlign: "center" }}>
                {EXAMPLES[tabContent].title}
              </h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>Please select a topic...</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
