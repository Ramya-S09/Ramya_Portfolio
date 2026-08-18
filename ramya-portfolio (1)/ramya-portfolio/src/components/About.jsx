import { profile, languages } from "../data.js";
import "./About.css";

const facts = [
  { label: "Location", value: profile.location },
  { label: "Focus", value: "React, Spring Boot, MySQL" },
  { label: "Languages", value: languages.join(" / ") },
  { label: "Grad year", value: "2026" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="panel-tag">panel_01 // about</div>
        <h2 className="section-heading">Profile</h2>
        <p className="section-sub">
          Where systems-level networking meets full-stack engineering.
        </p>

        <div className="about__grid">
          <div className="about__primary">
            <div className="about__photo-frame">
              <img className="about__photo" src={profile.photo} alt={profile.name} />
              <span className="about__photo-tag mono">RS_01.jpg</span>
            </div>
            <p className="about__summary">{profile.summary}</p>
          </div>

          <div className="about__facts">
            {facts.map((f) => (
              <div className="about__fact" key={f.label}>
                <span className="mono about__fact-label">{f.label}</span>
                <span className="about__fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
