import LazyImage from "../components/LazyImage.jsx";
import { projects, profile } from "../data.js";

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <LazyImage src={p.image} alt={`${p.title} interface preview`} width="800" height="500" />
            <div className="project-body">
              <h2>{p.title}</h2>
              <p className="muted">{p.type}</p>
              <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
              <p className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="muted">
        More code is on <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </section>
  );
}
