import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data.js";

const code = `<button class="btn">
  Order now
</button>

.btn {
  background: #2B50FF;
  color: #fff;
  padding: 12px 28px;
  border-radius: 999px;
}`;

// Hero idea: a designer's mockup and the code that builds it, side by side.
function DesignCode() {
  const [view, setView] = useState("design");
  return (
    <div className="dc">
      <div className="dc-tabs" role="tablist" aria-label="Design or code view">
        {["design", "code"].map((v) => (
          <button key={v} role="tab" aria-selected={view === v} onClick={() => setView(v)}>
            {v === "design" ? "Design" : "Code"}
          </button>
        ))}
      </div>
      <div className="dc-body" role="tabpanel">
        {view === "design" ? (
          <button className="demo-btn" type="button">Order now</button>
        ) : (
          <pre><code>{code}</code></pre>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className="hero page">
      <div>
        <h1>I design it, then I build it.</h1>
        <p className="lead">
          {profile.name} is a {profile.role.toLowerCase()} with seven years of
          design experience. I take interfaces from Figma to responsive,
          working web pages.
        </p>
        <p className="actions">
          <Link className="btn" to="/projects">See my projects</Link>
          <Link className="btn ghost" to="/contact">Get in touch</Link>
        </p>
      </div>
      <DesignCode />
    </section>
  );
}
