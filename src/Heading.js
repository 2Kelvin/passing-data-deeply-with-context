export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1 className="font-bold">{children}</h1>;
    case 2:
      return <h2 className="font-bold">{children}</h2>;
    case 3:
      return <h3 className="font-bold">{children}</h3>;
    case 4:
      return <h4 className="font-bold">{children}</h4>;
    case 5:
      return <h5 className="font-bold">{children}</h5>;
    case 6:
      return <h6 className="font-bold">{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
