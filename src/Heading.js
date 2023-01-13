import { LevelContext } from "../dist/LevelContext.js";

export default function Heading({ children }) {
  const level = React.useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1 className="font-bold text-6xl my-2">{children}</h1>;
    case 2:
      return <h2 className="font-bold text-4xl my-2">{children}</h2>;
    case 3:
      return <h3 className="font-bold text-2xl my-2">{children}</h3>;
    case 4:
      return <h4 className="font-bold text-lg my-2">{children}</h4>;
    case 5:
      return <h5 className="font-bold text-base my-2">{children}</h5>;
    case 6:
      return <h6 className="font-bold text-sm my-2">{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
