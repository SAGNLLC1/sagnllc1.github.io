function ContactInfo() {
  return (
    <>
      <div className="contact-info-card">
        <div className="contact-row">
          <div className="contact-icon"><IconPhone /></div>
          <div><h4>Phone</h4><a href="tel:+19544943137">(954) 494-3137</a></div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><IconMail /></div>
          <div><h4>Email</h4><a href="mailto:Joanne@sagnllc.com">Joanne@sagnllc.com</a></div>
        </div>
        <div className="contact-row">
          <div className="contact-icon"><IconPin /></div>
          <div><h4>Location</h4><p>Homestead, FL 33030</p></div>
        </div>
      </div>
      <div className="teaming-box">
        <h4>Teaming Opportunities</h4>
        <p>SAGN LLC is available as a woman-owned small business subcontractor for supply chain support, commodity procurement, and vendor sourcing. We also seek mentor-protégé partnerships with established primes.</p>
      </div>
    </>
  );
}
window.ContactInfo = ContactInfo;

function ContactForm({ onSubmit }) {
  // OPTIONAL FREE UPGRADE — no paid email needed:
  // 1. Go to formspree.io, sign up free, create a form (sends to Joanne@sagnllc.com).
  // 2. Paste the form's endpoint below (looks like https://formspree.io/f/abcdwxyz).
  // Until then, the form opens the visitor's email app pre-addressed to you.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdqlrpg"; // active

  const [state, setState] = React.useState({ name: "", email: "", phone: "", message: "", sent: false, sending: false });
  const set = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));

  const openMail = () => {
    const subject = `Government inquiry from ${state.name || "a contracting officer"}`;
    const body =
      `Name: ${state.name}\n` +
      `Email: ${state.email}\n` +
      `Phone: ${state.phone || "\u2014"}\n\n` +
      `${state.message}`;
    const mailto = `mailto:Joanne@sagnllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Anchor-click is more reliable than setting location.href across browsers.
    const a = document.createElement("a");
    a.href = mailto;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const send = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT) {
      try {
        setState(s => ({ ...s, sending: true }));
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: new FormData(e.target),
        });
        if (res.ok) { setState(s => ({ ...s, sent: true, sending: false, via: "form" })); onSubmit?.(state); return; }
      } catch (err) { /* fall through to email-app method */ }
      setState(s => ({ ...s, sending: false }));
    }
    openMail();
    setState(s => ({ ...s, sent: true, via: "mail" }));
    onSubmit?.(state);
  };
  if (state.sent) {
    return (
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <h3>Message Sent</h3>
        {state.via === "form" ? (
          <p style={{fontSize:"1rem", color:"var(--text-secondary)", lineHeight:1.65}}>
            Thank you &mdash; your message has been delivered to <strong>SAGN LLC</strong>. We respond to all inquiries within one business day.
          </p>
        ) : (
          <p style={{fontSize:"1rem", color:"var(--text-secondary)", lineHeight:1.65}}>
            Your email app should have opened with your message ready to send to
            <strong> Joanne@sagnllc.com</strong>. Just press send and we&rsquo;ll reply within one business day.
          </p>
        )}
        <p style={{fontSize:".94rem", color:"var(--text-light)", lineHeight:1.6, marginTop:12}}>
          Prefer to reach us directly? Call (954) 494-3137.
        </p>
        <button className="btn-submit" style={{marginTop:20}} onClick={() => setState({ name:"", email:"", phone:"", message:"", sent:false })}>
          Write another message
        </button>
      </form>
    );
  }
  return (
    <form className="contact-form" onSubmit={send}>
      <h3>Send Us a Message</h3>
      <div className="form-group"><label>Full Name *</label><input name="name" required value={state.name} onChange={set("name")} placeholder="Your full name" /></div>
      <div className="form-group"><label>Email Address *</label><input name="email" type="email" required value={state.email} onChange={set("email")} placeholder="your@email.com" /></div>
      <div className="form-group"><label>Phone (optional)</label><input name="phone" type="tel" value={state.phone} onChange={set("phone")} placeholder="(xxx) xxx-xxxx" /></div>
      <div className="form-group"><label>Message *</label><textarea name="message" required value={state.message} onChange={set("message")} placeholder="Tell us about your requirements…" /></div>
      <button className="btn-submit" type="submit" disabled={state.sending}>{state.sending ? "Sending…" : "Send Message"}</button>
    </form>
  );
}
window.ContactForm = ContactForm;
