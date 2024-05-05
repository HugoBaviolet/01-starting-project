import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectTopic, setSelectedTopic] = useState();

  function handleOnSelect(selectedButton) {
    //this then sets the topic to the value of selected button, this then stores the value in selectTopic variable
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
