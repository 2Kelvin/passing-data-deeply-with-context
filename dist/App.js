import Heading from "./Heading.js";
import Section from "./Section.js";

function Page() {
  return React.createElement(
    Section,
    null,
    React.createElement(
      Heading,
      { level: 1 },
      "Title"
    ),
    React.createElement(
      Heading,
      { level: 2 },
      "Heading"
    ),
    React.createElement(
      Heading,
      { level: 3 },
      "Sub-heading"
    ),
    React.createElement(
      Heading,
      { level: 4 },
      "Sub-sub-heading"
    ),
    React.createElement(
      Heading,
      { level: 5 },
      "Sub-sub-sub-heading"
    ),
    React.createElement(
      Heading,
      { level: 6 },
      "Sub-sub-sub-sub-heading"
    )
  );
}

export default function App() {
  return React.createElement(Page, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));