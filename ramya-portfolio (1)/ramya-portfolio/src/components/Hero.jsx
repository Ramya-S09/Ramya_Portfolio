import { profile, pipeline } from "../data.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="panel-tag">system.status // online</div>

        <h1 className="hero__title">
          {profile.name}
          <span className="hero__cursor" aria-hidden="true" />
        </h1>

        <p className="hero__role mono">{profile.role}</p>
        <p className="hero__focus">{profile.focus}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View work
          </a>
          <a className="btn btn--ghost" href="/Ramya_S_Resume.pdf" download>
            Download resume
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>

        {/* Signature element: an animated build pipeline showing how a
            feature actually ships — interface, language, service layer,
            database, deploy — rather than a decorative divider. */}
        <div className="trace" role="img" aria-label="Build pipeline: React, Java, Spring Boot, MySQL, Deploy">
          <div className="trace__line">
            <span className="trace__pulse" />
          </div>
          <div className="trace__nodes">
            {pipeline.map((t) => (
              <div className="trace__node" key={t}>
                <span className="trace__dot" />
                <span className="mono trace__label">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
