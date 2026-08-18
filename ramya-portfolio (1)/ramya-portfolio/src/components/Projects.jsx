import { projects } from "../data.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="panel-tag">panel_04 // projects</div>
        <h2 className="section-heading">Selected builds</h2>
        <p className="section-sub">Two projects spanning applied web development and systems programming.</p>

        <div className="proj__grid">
          {projects.map((p) => (
            <article className="proj__card" key={p.title}>
              <div className="proj__top">
                <span className="mono proj__tag">{p.tag}</span>
                {p.year && <span className="mono proj__year">{p.year}</span>}
              </div>
              <h3 className="proj__title">{p.title}</h3>
              <p className="proj__desc">{p.description}</p>
              <div className="proj__stack">
                {p.stack.map((s) => (
                  <span key={s} className="proj__stack-tag mono">
                    {s}
                  </span>
                ))}
              </div>
              {p.link && (
                <a className="proj__link mono" href={p.link} target="_blank" rel="noreferrer">
                  view repository →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
