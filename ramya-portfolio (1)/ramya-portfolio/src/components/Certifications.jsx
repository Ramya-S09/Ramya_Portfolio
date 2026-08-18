import { certifications, achievements, participation } from "../data.js";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="panel-tag">panel_06 // certifications &amp; activity</div>
        <h2 className="section-heading">Certifications &amp; leadership</h2>
        <p className="section-sub">Continuous learning alongside campus involvement.</p>

        <div className="cert__grid">
          <div>
            <h3 className="cert__col-title mono">Certifications</h3>
            <ul className="cert__list">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="cert__name">{c.name}</span>
                  <span className="mono cert__issuer">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="cert__col-title mono">Achievements</h3>
            <ul className="cert__list cert__list--achieve">
              {achievements.map((a) => (
                <li key={a.title}>
                  <span className="cert__name">{a.title}</span>
                  {a.period && <span className="mono cert__issuer">{a.period}</span>}
                  <p className="cert__detail">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cert__participation">
          <h3 className="cert__col-title mono">Participation</h3>
          <ul>
            {participation.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
