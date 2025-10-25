import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import "./App_news.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [email, setEmail] = useState("");
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [latestNews, setLatestNews] = useState([]);
  const [circulars, setCirculars] = useState([]);

  const NEWS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSST7M85EUsnW6RxzGju2ZmkpdUr3vzBDad42byntT_JyBpHlxFGIOBqMzCl-iQfiLtZ4yjAqroonp-/pub?gid=0&single=true&output=csv&t=${Date.now()}`;
  const CIRCULARS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSST7M85EUsnW6RxzGju2ZmkpdUr3vzBDad42byntT_JyBpHlxFGIOBqMzCl-iQfiLtZ4yjAqroonp-/pub?gid=1921325880&single=true&output=csv&t=${Date.now()}`;

  useEffect(() => {
    readRemoteFile(NEWS_CSV_URL, {
      header: true,
      download: true,
      complete: (results) => {
        const news = results.data
          .filter((row) => row.title)
          .map((row) => ({
            category: row.category?.split(",").map((c) => c.trim()),
            title: row.title,
            date: row.date,
            time: row.time,
            dept: row.dept,
            desc: row.desc,
          }));
        setLatestNews(news);
      },
    });

    readRemoteFile(CIRCULARS_CSV_URL, {
      header: true,
      download: true,
      complete: (results) => {
        const circs = results.data
          .filter((row) => row.title)
          .map((row) => ({
            category: row.category?.split(",").map((c) => c.trim()),
            title: row.title,
            date: row.date,
            size: row.size,
            desc: row.desc,
            link: row.link,
          }));
        setCirculars(circs);
      },
    });
  }, []);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4odtE_nvmmiiE0nJKK16Bi4Fgb4jUtdb3_nda1WftJA08GPqHjOgFOyZhv9QGiMQm/exec";

  const handleSubscribe = () => {
  const emailTrimmed = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
    setPopupType("error");
    setPopupMessage("⚠️ Please enter a valid email address.");
    setTimeout(() => setPopupMessage(null), 3000);
    return;
  }

  setPopupType("success");
  setPopupMessage("✅ Subscription Successful!");
  setTimeout(() => setPopupMessage(null), 3000);

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailTrimmed }),
  }).catch((err) => console.log("Subscription request failed silently", err));

  setEmail("");
};


  return (
    <div className="container">
      <h1 className="title">News & Circulars</h1>
      <p className="subtitle">
        Stay updated with the latest news, announcements, and circulars from
        our institution.
      </p>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "latest" ? "active" : ""}
          onClick={() => setActiveTab("latest")}
        >
          Latest News
        </button>
        <button
          className={activeTab === "circulars" ? "active" : ""}
          onClick={() => setActiveTab("circulars")}
        >
          Circulars & Downloads
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "latest" ? (
        <div className="latest-news">
          {latestNews.length === 0 ? (
            <p>No news available right now.</p>
          ) : (
            latestNews.map((item, idx) => (
              <div key={idx} className="card">
                <div className="tags">
                  {item.category?.map((cat, i) => (
                    <span key={i} className="tag">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p className="meta">
                  {item.date} | {item.time} | {item.dept}
                </p>
                <p>{item.desc}</p>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="circs">
          {circulars.length === 0 ? (
            <p>No circulars available.</p>
          ) : (
            circulars.map((item, idx) => (
              <div key={idx} className="card">
                <div className="tags">
                  {item.category?.map((cat, i) => (
                    <span key={i} className="tag">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p className="meta">
                  {item.date} | PDF {item.size}
                </p>
                <p>{item.desc}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                ) : (
                  <span className="btn disabled">No PDF</span>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-box">
          <h2>{latestNews.length}</h2>
          <p>Latest News</p>
        </div>
        <div className="stat-box">
          <h2>{circulars.length}</h2>
          <p>Circulars</p>
        </div>
        <div className="stat-box">
          <h2>{circulars.filter((c) => c.link).length}</h2>
          <p>Downloads</p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe">
        <h3>Stay Updated</h3>
        <p>Subscribe to notifications for important updates.</p>
        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>

      {/* ✅ Toast Notification */}
      {popupMessage && <div className={`toast ${popupType}`}>{popupMessage}</div>}

      {/* Footer */}
      <footer className="footer">
        <p>Name: AVS Meghana | Roll No: 23XV1M0505 | CSE - 3rd Year 1st Sem</p>
      </footer>
    </div>
  );
};

export default App;