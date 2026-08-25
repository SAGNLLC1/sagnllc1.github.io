function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div>
          <h1>SAGN LLC</h1>
          <p className="hero-sub">Government Procurement &amp; Supply Chain Solutions</p>
          <p className="hero-desc">
            Reliable facility support, supply chain coordination, and procurement services for government agencies across Florida and the Southeast United States.
          </p>
          <p className="hero-desc" style={{marginTop:-8}}>Request a quote or discuss teaming opportunities with SAGN LLC.</p>
          <div className="hero-btns">
            <a className="btn btn-primary" href="./SAGN_LLC_Capability_Statement.pdf" target="_blank" rel="noopener" download>
              <IconDownload /> Download Capability Statement
            </a>
            <button className="btn btn-outline" onClick={onSecondary}>
              Get in Touch <IconArrowRight />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="./assets/sagn_logo_clean.png" alt="SAGN LLC winged S logo" />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
