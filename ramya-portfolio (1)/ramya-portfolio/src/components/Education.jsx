import { education } from "../data.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="panel-tag">panel_05 // education</div>
        <h2 className="section-heading">Education</h2>
        <p className="section-sub">Academic record from schooling through engineering.</p>

        <div className="edu__list">
          {education.map((e) => (
            <article className="edu__item" key={e.degree}>
              <span className="mono edu__period">{e.period}</span>
              <div className="edu__body">
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__school">{e.school}</p>
              </div>
              <span className="mono edu__detail">{e.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
