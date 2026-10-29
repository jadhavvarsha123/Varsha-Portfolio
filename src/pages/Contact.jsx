import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // No server needed: opens the visitor's email app with the message filled in.
  // To receive messages directly, swap this for a Formspree/Netlify Forms endpoint.
  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page contact">
      <div>
        <h1>Contact</h1>
        <p className="lead">I'm looking for a Full Stack Java Developer or Software Engineer role. Send me a message.</p>
        <ul className="plain">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
      <form onSubmit={send}>
        <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
        <label>Message<textarea required rows="5" value={f.message} onChange={set("message")} /></label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
