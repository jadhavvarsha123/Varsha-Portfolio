import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section className="page">
      <h1>Skills</h1>
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <h2>{g.name}</h2>
            <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
