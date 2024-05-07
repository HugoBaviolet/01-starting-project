import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [selectTopic, setSelectedTopic] = useState();

  function handleOnSelect(selectedButton) {
    //this then sets the topic to the value of selected button, this then stores the value in selectTopic variable
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton
          isSelected={selectTopic === "components"}
          onSelect={() => handleOnSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectTopic === "jsx"}
          onSelect={() => handleOnSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectTopic === "props"}
          onSelect={() => handleOnSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectTopic === "state"}
          onSelect={() => handleOnSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectTopic && <p>Please select a topic.</p>}
      {selectTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
