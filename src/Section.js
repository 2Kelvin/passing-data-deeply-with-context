import { LevelContext } from "../dist/LevelContext.js";

export default function Section({ children }) {
  // each Section stops using a level prop & gets its level value from the Context of the Section above it
  const level = React.useContext(LevelContext);

  return (
    <section className="border border-slate-200 rounded-md p-6 shadow-md w-fit">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
