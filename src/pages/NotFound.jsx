import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page narrow">
      <h1>Page not found</h1>
      <p>That address doesn't exist. <Link to="/">Go to the home page</Link>.</p>
    </section>
  );
}
