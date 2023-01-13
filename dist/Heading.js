import { LevelContext } from "../dist/LevelContext.js";

export default function Heading(_ref) {
  var children = _ref.children;

  var level = React.useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return React.createElement(
        "h1",
        { className: "font-bold text-6xl my-4" },
        children
      );
    case 2:
      return React.createElement(
        "h2",
        { className: "font-bold text-4xl my-4" },
        children
      );
    case 3:
      return React.createElement(
        "h3",
        { className: "font-bold text-2xl my-4" },
        children
      );
    case 4:
      return React.createElement(
        "h4",
        { className: "font-bold text-lg my-4" },
        children
      );
    case 5:
      return React.createElement(
        "h5",
        { className: "font-bold text-base my-4" },
        children
      );
    case 6:
      return React.createElement(
        "h6",
        { className: "font-bold text-sm my-4" },
        children
      );
    default:
      throw Error("Unknown level: " + level);
  }
}