import { profile } from "../data.js";
import "./Contact.css";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "ramya-s-4052ba268", href: profile.linkedin },
  { label: "GitHub", value: "RAMYAs-09", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="panel-tag">panel_07 // contact</div>
        <h2 className="section-heading">Let's connect</h2>
        <p className="section-sub">
          Open to opportunities in VoIP/networking support and full-stack development roles.
        </p>

        <div className="contact__grid">
          {links.map((l) => (
            <a className="contact__card" href={l.href} key={l.label} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="mono contact__label">{l.label}</span>
              <span className="contact__value">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
