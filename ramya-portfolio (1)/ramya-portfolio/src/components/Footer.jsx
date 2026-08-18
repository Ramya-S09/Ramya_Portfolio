import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>© {new Date().getFullYear()} Ramya S</span>
        <span className="footer__dim">built with react · no frameworks harmed</span>
      </div>
    </footer>
  );
}
