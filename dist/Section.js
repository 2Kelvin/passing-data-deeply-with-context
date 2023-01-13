export default function Section(_ref) {
  var children = _ref.children;

  return React.createElement(
    "section",
    { className: "border border-slate-600 rounded-md px-1 py-3" },
    children
  );
}