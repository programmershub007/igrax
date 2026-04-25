"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";

export default function DownloaderUI() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const mainCardRef = useRef(null);
  const resultRef = useRef(null);

  // SEO
  useEffect(() => {
    document.title = "InstaReelsDownload – Download Instagram Reels";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Free Instagram Reels downloader – save any public reel as MP4. No watermark, no registration.");
  }, []);

  // Auto-scroll to main card on load
  useEffect(() => {
    if (mainCardRef.current) {
      mainCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Scroll to video when ready
  useEffect(() => {
    if (completed && video && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [completed, video]);

  // Download via backend proxy
  const startDownload = (videoUrl) => {
    const link = document.createElement("a");
    link.href = `/api/download-file?url=${encodeURIComponent(videoUrl)}`;
    link.download = "instagram_reel.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReelsDownload = async () => {
    if (!url.trim()) {
      setErrorMsg("⚠️ Please paste a valid Instagram Reel URL");
      return;
    }
    setErrorMsg("");
    setLoading(true);
    setVideo("");
    setCompleted(false);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!data.videoUrl) {
        alert("❌ Video not found. Make sure the reel is public.");
        return;
      }
      setVideo(data.videoUrl);
      setCompleted(true);
      startDownload(data.videoUrl);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 5000);
    } catch (err) {
      alert("⚠️ Error occurred while processing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUrl("");
    setVideo("");
    setCompleted(false);
    setErrorMsg("");
    if (mainCardRef.current) {
      mainCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Instructions
  const instructions = [
    "📌 Step 1: Find the reel you want to save.",
    "📌 Step 2: Tap the share icon and select 'Copy link'.",
    "📌 Step 3: Paste the link in the box below.",
    "📌 Step 4: Click 'Download' – we'll fetch the MP4 file.",
    "✨ Pro tip: The video quality is as high as Instagram provides."
  ];

  const faqs = [
    { q: "🔓 Is instareelsdownload.com free to use?", a: "Absolutely. No sign‑up, no hidden fees – 100% free forever." },
    { q: "🛡️ Do you store my downloaded media?", a: "No. All processing happens in real time, and files are never saved on our servers." },
    { q: "📏 Is there a file size limit?", a: "Not really. Very large reels might take a few extra seconds, but we handle them well." },
    { q: "🔒 Can I download private content?", a: "Only public Instagram content is supported due to platform restrictions." },
    { q: "⚡ Why is the download not starting?", a: "Double‑check the URL and ensure the content is public. If issues persist, refresh the page." },
  ];

  return (
    <>
      <Head>
        <title>InstaReelsDownload – Download Instagram Reels (No Watermark)</title>
        <meta name="description" content="Free Instagram Reels downloader – save any public reel as MP4. No watermark, no registration, instant." />
        <meta name="keywords" content="instagram reel download, reel saver, instagram video downloader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="ir-wrapper">
        <div className="ir-container">
          {/* Header */}
          <header className="ir-header">
            <div className="logo">
              <div className="logo-icon-wrapper">
                <i className="fas fa-play-circle logo-play"></i>
                <i className="fas fa-arrow-down logo-download"></i>
              </div>
              <h1>insta<span className="purple-accent">reelsdownload</span></h1>
            </div>
            <p className="main-tagline">Advanced Instagram Reels Downloader</p>
            <div className="hero-stats">
              <span><i className="fas fa-download"></i> 100% Free</span>
              <span><i className="fas fa-bolt"></i> Instant Processing</span>
              <span><i className="fas fa-shield-alt"></i> No Registration</span>
            </div>
          </header>

          {/* Main download card */}
          <div className="ir-card hover-lift" ref={mainCardRef}>
            <div className="tool-header">
              <h2><i className="fas fa-play-circle"></i> Reels Downloader</h2>
              <p className="tool-sub">Save Instagram Reels as MP4 videos – highest quality, no watermark</p>
            </div>

            <div className="input-section">
              <input
                type="text"
                placeholder="🔗 Paste Instagram Reel URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
                className="url-input"
              />
              {errorMsg && <div className="error-msg">{errorMsg}</div>}

              <div className="action-group">
                {!completed && !loading && (
                  <button className="btn primary" onClick={handleReelsDownload}>
                    <i className="fas fa-download"></i> Download
                  </button>
                )}
                {loading && (
                  <div className="loader-wrapper">
                    <div className="gradient-double-ring"></div>
                    <span>Processing media...</span>
                  </div>
                )}
                {completed && !loading && (
                  <button className="btn secondary" onClick={handleClear}>
                    <i className="fas fa-times"></i> Download Another
                  </button>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="instructions-card">
              <h3><i className="fas fa-info-circle"></i> How to use – Reels Downloader</h3>
              <ul className="instruction-list">
                {instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
              <div className="extra-info">
                <i className="fas fa-lightbulb"></i> We support all public reels, including those with music and effects. No watermarks added.
              </div>
              <div className="format-info">
                <i className="fas fa-file-alt"></i> Supported format: MP4 (video/mp4)
              </div>
            </div>
          </div>

          {/* Video result & preview */}
          {video && (
            <div className="result-section hover-lift fade-up" ref={resultRef}>
              <h3><i className="fas fa-check-circle" style={{ color: "#10b981" }}></i> Your Reel is ready</h3>
              <div className="preview-area">
                <video controls className="reel-player" playsInline>
                  <source src={video} type="video/mp4" />
                </video>
                <div className="preview-actions">
                  <a
                    href={`/api/download-file?url=${encodeURIComponent(video)}`}
                    className="btn download-link"
                  >
                    <i className="fas fa-save"></i> Save Video (MP4)
                  </a>
                  <button onClick={handleClear} className="btn outline">
                    <i className="fas fa-sync-alt"></i> Download Another
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Why choose us */}
          <div className="features-section">
            <h3>Why choose instareelsdownload?</h3>
            <div className="features-grid">
              <div className="feature hover-lift"><i className="fas fa-tachometer-alt"></i> Blazing fast servers</div>
              <div className="feature hover-lift"><i className="fas fa-lock"></i> 100% secure & anonymous</div>
              <div className="feature hover-lift"><i className="fas fa-infinity"></i> Unlimited downloads</div>
              <div className="feature hover-lift"><i className="fas fa-mobile-alt"></i> Works on all devices</div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h3><i className="fas fa-question-circle"></i> Frequently Asked Questions</h3>
            <div className="faq-grid">
              {faqs.map((faq, idx) => (
                <div className="faq-item hover-lift" key={idx}>
                  <div className="faq-question">{faq.q}</div>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
            <div className="faq-footer">
              <p><i className="fas fa-envelope"></i> More features? Suggestions? support@instareelsdownload.com</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="ir-footer">
            <p>© 2025‑2026 instareelsdownload.com — independent tool. Respect content ownership. No data stored.</p>
            <p><i className="fas fa-code-branch"></i> Version 3.0 — Reels only</p>
          </footer>
        </div>

        {/* Success popup (green tick + close button) */}
        {showSuccessPopup && (
          <div className="success-popup-overlay">
            <div className="success-popup">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Download started!</h3>
              <p>Bookmark this site for future use.</p>
              <button className="close-popup-btn" onClick={() => setShowSuccessPopup(false)}>
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}