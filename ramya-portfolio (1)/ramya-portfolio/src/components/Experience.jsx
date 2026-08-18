import { experience } from "../data.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="panel-tag">panel_03 // experience</div>
        <h2 className="section-heading">Experience log</h2>
        <p className="section-sub">Internships that shaped the full-stack half of the skill set.</p>

        <div className="exp__list">
          {experience.map((e) => (
            <article className="exp__item" key={e.company}>
              <div className="exp__meta">
                <span className="mono exp__period">{e.period}</span>
              </div>
              <div className="exp__body">
                <h3 className="exp__role">{e.role}</h3>
                <p className="exp__company mono">{e.company}</p>
                <ul className="exp__points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
