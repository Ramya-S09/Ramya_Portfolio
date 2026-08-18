import { skillGroups } from "../data.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="panel-tag">panel_02 // skills</div>
        <h2 className="section-heading">Technical stack</h2>
        <p className="section-sub">
          Grouped by domain — from protocol-level networking to product-level web development.
        </p>

        <div className="skills__grid">
          {skillGroups.map((g) => (
            <div className="skills__card" key={g.id}>
              <h3 className="skills__card-title mono">{g.label}</h3>
              <div className="skills__tags">
                {g.items.map((item) => (
                  <span className="skills__tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
