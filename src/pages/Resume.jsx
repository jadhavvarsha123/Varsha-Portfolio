import { experience, education, certifications, profile } from "../data.js";

export default function Resume() {
  return (
    <section className="page narrow">
      <h1>Resume</h1>
      <p><a className="btn" href={profile.resumeFile} download>Download PDF</a></p>

      <h2>Experience</h2>
      {experience.map((e) => (
        <article key={e.role} className="row">
          <p className="period">{e.period}</p>
          <div>
            <h3>{e.role}, {e.org}</h3>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </article>
      ))}

      <h2>Education</h2>
      {education.map(([deg, school, period]) => (
        <article key={deg} className="row">
          <p className="period">{period}</p>
          <div><h3>{deg}</h3><p>{school}</p></div>
        </article>
      ))}

      <h2>Certifications</h2>
      {certifications.map(([name, org, year]) => (
        <article key={name} className="row">
          <p className="period">{year}</p>
          <div><h3>{name}</h3><p>{org}</p></div>
        </article>
      ))}
    </section>
  );
}
