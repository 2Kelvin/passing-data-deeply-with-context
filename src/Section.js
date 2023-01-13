import { LevelContext } from "../dist/LevelContext.js";

export default function Section({ level, children }) {
  return (
    <section className="border border-slate-200 rounded-md p-6 shadow-md w-fit">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
