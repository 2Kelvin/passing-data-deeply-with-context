import Heading from "./Heading.js";
import Section from "./Section.js";

export default function Post(_ref) {
  var title = _ref.title,
      body = _ref.body;

  return React.createElement(
    Section,
    null,
    React.createElement(
      Heading,
      null,
      title
    ),
    React.createElement(
      "p",
      { className: "font-mono text-sm" },
      body
    )
  );
}