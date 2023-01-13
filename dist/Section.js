import { LevelContext } from "../dist/LevelContext.js";

export default function Section(_ref) {
  var level = _ref.level,
      children = _ref.children;

  return React.createElement(
    "section",
    { className: "border border-slate-200 rounded-md p-6 shadow-md w-fit" },
    React.createElement(
      LevelContext.Provider,
      { value: level },
      children
    )
  );
}