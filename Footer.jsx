function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#hero">
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC" />
          <span>SAGN LLC</span>
        </a>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#differentiators">Why SAGN</a>
          <a href="#past-performance">Past Performance</a>
          <a href="#company-data">Company Data</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="footer-meta">
          <span>Joanne Seepersad, Owner</span>
          <span>(954) 494-3137</span>
          <a href="mailto:Joanne@sagnllc.com">Joanne@sagnllc.com</a>
          <span>Homestead, FL 33030</span>
          <span className="footer-cage">CAGE 125K5</span>
        </div>
        <span className="footer-copy">&copy; 2026 SAGN LLC</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
