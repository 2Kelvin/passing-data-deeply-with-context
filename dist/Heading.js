export default function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children;

  switch (level) {
    case 1:
      return React.createElement(
        "h1",
        { className: "font-bold" },
        children
      );
    case 2:
      return React.createElement(
        "h2",
        { className: "font-bold" },
        children
      );
    case 3:
      return React.createElement(
        "h3",
        { className: "font-bold" },
        children
      );
    case 4:
      return React.createElement(
        "h4",
        { className: "font-bold" },
        children
      );
    case 5:
      return React.createElement(
        "h5",
        { className: "font-bold" },
        children
      );
    case 6:
      return React.createElement(
        "h6",
        { className: "font-bold" },
        children
      );
    default:
      throw Error("Unknown level: " + level);
  }
}