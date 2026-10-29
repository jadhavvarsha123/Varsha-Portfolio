import { summary, facts } from "../data.js";

export default function About() {
  return (
    <section className="page narrow">
      <h1>About me</h1>
      <p className="lead">{summary}</p>
      <dl className="facts">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
