// App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Welcome to EduPortal</h1>
        <p className="hero-subtitle">
          Your one-stop platform for academic excellence, updates, and events.
        </p>
        <button className="hero-btn">Get Started</button>
      </header>

      {/* Events Section */}
      <section className="events">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Stay updated with our latest events, workshops, and announcements.
        </p>
        <div className="events-grid">
          <div className="event-card">
            <h3>Annual Science Fair</h3>
            <p>Showcase of innovative student projects and research presentations.</p>
            <span className="tag academic">Academic</span>
          </div>
          <div className="event-card">
            <h3>Student Registration Opens</h3>
            <p>Registration for Spring 2025 semester begins.</p>
            <span className="tag registration">Registration</span>
          </div>
          <div className="event-card">
            <h3>Career Guidance Workshop</h3>
            <p>Professional development and career planning session.</p>
            <span className="tag workshop">Workshop</span>
          </div>
          <div className="event-card">
            <h3>Mid-term Examinations</h3>
            <p>Mid-semester examination schedule begins.</p>
            <span className="tag exam">Exam</span>
          </div>
        </div>
        <div className="events-btn-container">
          <button className="cta-btn primary">View all Events</button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of students who have chosen excellence. Register today and begin your journey.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Register for Exams</button>
          <button className="cta-btn secondary">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EduPortal</h3>
            <p>
              Your trusted educational institution providing quality education and fostering academic excellence.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Contact Us</li>
              <li>Exam Info</li>
              <li>News & Circulars</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>CR Rao AIMSCS</p>
            <p>CUC, Gachibowli, Hyderabad - 500084</p>
            <p>Phone: 040-29553322 </p>
            <p>Email: director@crraoaimscs.res.in</p>
          </div>
        </div>
        <p className="footer-bottom">Thapasvi Pooguri | Roll No. 23XV1M0545 | CSE -3rd Year Sem 1</p>
      </footer>
    </div>
  );
}

export default App;
