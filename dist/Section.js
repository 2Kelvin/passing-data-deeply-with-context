import { LevelContext } from "../dist/LevelContext.js";

export default function Section(_ref) {
  var children = _ref.children;

  // each Section stops using a level prop & gets its level value from the Context of the Section above it
  var level = React.useContext(LevelContext);

  return React.createElement(
    "section",
    { className: "border border-slate-200 rounded-xl m-4 first-of-type:mt-9 p-3 pb-6 shadow-lg w-fit bg-teal-100" },
    React.createElement(
      LevelContext.Provider,
      { value: level + 1 },
      children
    )
  );
}