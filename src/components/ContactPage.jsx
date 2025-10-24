import React, { useState } from "react";

// --- Header navigation icons ---
const headerIcons = {
  home: (color = "#1976d2") => (
    <svg width="1.15em" height="1.15em" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 7, verticalAlign: "middle" }}>
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" />
    </svg>
  ),
};

// --- Sidebar icons ---
const icons = {
  googleMapsPin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "1.1em", width: "1.1em", verticalAlign: "middle", marginRight: 6 }}>
      <path d="M12 21C12 21 19 13.7 19 9C19 5.69 16.31 3 13 3C9.69 3 7 5.69 7 9C7 13.7 14 21 14 21H12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24" style={{ height: "1.1em", width: "1.1em", verticalAlign: "middle", marginRight: 6 }}>
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <circle cx="12" cy="18" r="0.6" />
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24" style={{ height: "1.1em", width: "1.1em", verticalAlign: "middle", marginRight: 6 }}>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24" style={{ height: "1.1em", width: "1.1em", verticalAlign: "middle", marginRight: 6 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

// --- MAIN CONTACT PAGE ---
function ContactPage() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", fontFamily: "Segoe UI, Arial, sans-serif", width: "100vw" }}>
      <br />
      <br />
      <div style={{ maxWidth: 1200, margin: "24px auto", padding: "0 24px" }}>
        <h1 style={{ textAlign: "center", color: "black", fontWeight: 700 }}>Contact Us</h1>
        <p style={{ textAlign: "center", color: "#555" }}>
          Get in touch with our team for support, inquiries, or feedback. We’re here to help!
        </p>

        <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap", justifyContent: "center" }}>
          <Sidebar />
          <ContactForm />
        </div>

        <MapSection />
      </div>

      <Footer />
    </div>
  );
}

// --- SIDEBAR ---
function Sidebar() {
  return (
    <aside style={{ flex: "0 1 320px", maxWidth: 320, minWidth: 280, display: "flex", flexDirection: "column", gap: 18 }}>
      <Card title={<><span>{icons.googleMapsPin}</span> Visit Us</>}>
        <div style={{ fontWeight: 600, color: "black" }}>Main Campus</div>
        <div>
          CR Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)
          <br /> CUC Campus, Hyderabad
          <br /> Telangana - 500084
        </div>
      </Card>

      <Card title={<><span>{icons.phone}</span> Call Us</>}>
        <div><strong style={{ color: "black" }}>Main Office:</strong> +91 9865473012</div>
        <div><strong style={{ color: "black" }}>Admissions:</strong> +91 9876543210</div>
      </Card>

      <Card title={<><span>{icons.mail}</span> Email Us</>}>
        <div><strong style={{ color: "black" }}>General Inquiries:</strong> director@crraoaimscs.res.in</div>
        <div><strong style={{ color: "black" }}>Admissions:</strong> admissions@crraoaimscs.res.in</div>
      </Card>

      <Card title={<><span>{icons.clock}</span> Office Hours</>}>
        <div style={{ color: "black" }}>
          <div>Monday - Friday</div><div>8:00 AM - 5:00 PM</div>
          <div>Saturday</div><div>9:00 AM - 4:00 PM</div>
          <div>Sunday</div><div>Closed</div>
        </div>
      </Card>
    </aside>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 6px #e0e4ea44", padding: 20, border: "1px solid #e5e7eb" }}>
      <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 20, color: "black", display: "flex", alignItems: "center" }}>{title}</div>
      <div style={{ color: "#374151" }}>{children}</div>
    </div>
  );
}

// --- CONTACT FORM ---
function ContactForm() {
  const [popup, setPopup] = useState("");

  const showPopup = (msg) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    // show popup immediately
    showPopup("Thank you for contacting us. We will get in touch with you shortly.");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwQsNqZOFrJeZTgy2wsljVlGgzUQfybHsHTK_xtofAVf201MBKsywgyWsgl3yCcH1irGA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      form.reset();
    } catch (error) {
      console.error(error);
      showPopup("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {popup && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "#ffffff",
          color: "#000",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 500,
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          zIndex: 1000,
          transition: "opacity 0.3s ease",
        }}>
          {popup}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          minWidth: 340,
          background: "#fff",
          padding: 30,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 6px #e0e4ea44",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6, color: "black" }}>Send us a Message</div>
        <div style={{ fontSize: 13, color: "#65717a", marginBottom: 12 }}>
          Fill out the form below and we will get back to you as soon as possible.
        </div>

        <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label>First Name</label>
            <input name="firstName" style={inputStyle} required placeholder="Enter your first name" />
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input name="lastName" style={inputStyle} required placeholder="Enter your last name" />
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label>Email</label>
            <input name="email" type="email" style={inputStyle} required placeholder="Enter your email" />
          </div>
          <div style={{ flex: 1 }}>
            <label>Phone</label>
            <input name="phone" style={inputStyle} placeholder="Enter your phone number" />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Subject</label>
          <select name="subject" style={inputStyle} required defaultValue="">
            <option value="" disabled>Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Admission">Admission</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Message</label>
          <textarea name="message" style={{ ...inputStyle, minHeight: 80 }} required placeholder="Please provide details about your inquiry..." />
        </div>

        <button type="submit" style={{ marginTop: 18, background: "#2563eb", color: "#fff", border: "none", borderRadius: 4, padding: "10px 32px", fontWeight: 600, cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #cbd5e1",
  borderRadius: 4,
  marginTop: 4,
  color: "#222",
  background: "#fff",
};

// --- MAP SECTION ---
function MapSection() {
  const mapUrl = "https://www.google.com/maps/place/CR+Rao+Advanced+Institute+of+Mathematics,+Statistics+and+Computer+Science+(AIMSCS)/@17.452185,78.3392525,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93a7b218a903:0x388d1c304f1c27c5!8m2!3d17.452185!4d78.3418274!16s%2Fm%2F05f3gy1";

  return (
    <div style={{ background: "#fff", marginTop: 32, border: "1px solid #e5e7eb", borderRadius: 8, padding: 24, color: "black" }}>
      <div style={{ fontWeight: 700, marginBottom: 4, fontSize: 20, display: "flex", alignItems: "center", gap: 6 }}>
        <span>{icons.googleMapsPin}</span> Find Us on Campus
      </div>
      <p style={{ fontSize: 13, color: "#65717a", marginBottom: 24 }}>
        Our campus is conveniently located in the heart of Learning City.
      </p>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#f1f5f9",
          border: "1px solid #cbd5e1",
          borderRadius: 8,
          textAlign: "center",
          padding: 48,
          color: "#1976d2",
          fontSize: 14,
          fontWeight: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <span style={{ marginBottom: 12, fontSize: 44 }}>{icons.googleMapsPin}</span>
        Open in Google Maps
        <br />
        CR Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS), Gachibowli, Hyderabad
      </a>
    </div>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer style={{ background: "#fff", color: "#8c8b8b", textAlign: "center", padding: "18px 0", marginTop: 48, fontSize: "0.8em", fontWeight: 400 }}>
      Amrutha Varshini Astakala | Roll No. 23XV1M0503 | CSE - 3rd Year Sem 1
    </footer>
  );
}

export default ContactPage;
