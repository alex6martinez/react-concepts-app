import { useState } from "react";
import { EXAMPLES } from "../util/core-concepts";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        // buttonsContainer={"menu"} // if you want to use custom component ex: buttonsContainer={Section}
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
