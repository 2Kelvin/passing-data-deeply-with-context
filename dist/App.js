import Heading from "./Heading.js";
import Section from "./Section.js";

function Page() {
  return React.createElement(
    Section,
    null,
    React.createElement(
      Heading,
      null,
      "Title"
    ),
    React.createElement(
      Section,
      null,
      React.createElement(
        Heading,
        null,
        "Heading"
      ),
      React.createElement(
        Heading,
        null,
        "Heading"
      ),
      React.createElement(
        Heading,
        null,
        "Heading"
      ),
      React.createElement(
        Section,
        null,
        React.createElement(
          Heading,
          null,
          "Sub-heading"
        ),
        React.createElement(
          Heading,
          null,
          "Sub-heading"
        ),
        React.createElement(
          Heading,
          null,
          "Sub-heading"
        ),
        React.createElement(
          Section,
          null,
          React.createElement(
            Heading,
            null,
            "Sub-sub-heading"
          ),
          React.createElement(
            Heading,
            null,
            "Sub-sub-heading"
          ),
          React.createElement(
            Heading,
            null,
            "Sub-sub-heading"
          )
        )
      )
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen" },
    React.createElement(Page, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));