// // "use client";
// // import { useState } from "react";

// // export default function DownloaderUI() {
// //   const [url, setUrl] = useState("");
// //   const [video, setVideo] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleDownload = async () => {
// //     try {
// //       setLoading(true);
// //       setVideo("");

// //       const res = await fetch("/api/download", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json", // ✅ FIX
// //         },
// //         body: JSON.stringify({ url }),
// //       });

// //       // ✅ SAFETY CHECK
// //       if (!res.ok) {
// //         const text = await res.text();
// //         throw new Error(text || "Request failed");
// //       }

// //       const data = await res.json();

// //       if (!data.videoUrl) {
// //         alert("Video not found");
// //         return;
// //       }

// //       setVideo(data.videoUrl);

// //     } catch (err) {
// //       console.error(err);
// //       alert("Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h1>Instagram Reel Downloader</h1>

// //       <input
// //         type="text"
// //         placeholder="Paste Instagram Reel URL..."
// //         value={url}
// //         onChange={(e) => setUrl(e.target.value)}
// //       />

// //       <button onClick={handleDownload}>
// //         {loading ? "Processing..." : "Get Download Link"}
// //       </button>

// //       {video && (
// //         <a
// //           href={`/api/download-file?url=${encodeURIComponent(video)}`}
// //           className="btn-download"
// //         >
// //           Download MP4
// //         </a>
// //       )}
// //     </div>
// //   );
// // }


// // "use client";
// // import { useState } from "react";

// // export default function DownloaderUI() {
// //   const [url, setUrl] = useState("");
// //   const [video, setVideo] = useState("");
// //   const [thumb, setThumb] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleDownload = async () => {
// //     try {
// //       setLoading(true);
// //       setVideo("");
// //       setThumb("");

// //       const res = await fetch("/api/download", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ url }),
// //       });

// //       const data = await res.json();

// //       if (!data.videoUrl) {
// //         alert("Video not found");
// //         return;
// //       }

// //       setVideo(data.videoUrl);
// //       setThumb(data.thumbnail);

// //     } catch (err) {
// //       alert("Error occurred");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="wrapper">
// //       <div className="card">

// //         <h1 className="title">Instagram Reel Downloader</h1>

// //         <input
// //           type="text"
// //           placeholder="Paste Instagram Reel URL..."
// //           value={url}
// //           onChange={(e) => setUrl(e.target.value)}
// //         />

// //         <button className="gold-btn" onClick={handleDownload}>
// //           {loading ? <span className="loader"></span> : "Download"}
// //         </button>

// //         {thumb && (
// //           <div className="preview">
// //             <img src={thumb} alt="thumbnail" />
// //           </div>
// //         )}

// //         {video && (
// //           <video controls className="video-preview">
// //             <source src={video} type="video/mp4" />
// //           </video>
// //         )}

// //         {video && (
// //           <a
// //             href={`/api/download-file?url=${encodeURIComponent(video)}`}
// //             className="download-final"
// //           >
// //             Download Video
// //           </a>
// //         )}
  
// //       </div>

   
// //     </div>
// //   );
// // }



// "use client";
// import { useState } from "react";

// export default function DownloaderUI() {
//   const [url, setUrl] = useState("");
//   const [video, setVideo] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [completed, setCompleted] = useState(false);

//   const handleDownload = async () => {
//     try {
//       setLoading(true);
//       setVideo("");
//       setCompleted(false);

//       const res = await fetch("/api/download", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ url }),
//       });

//       const data = await res.json();

//       if (!data.videoUrl) {
//         alert("Video not found");
//         return;
//       }

//       setVideo(data.videoUrl);
//       setCompleted(true);
//     } catch (err) {
//       alert("Error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setUrl("");
//     setVideo("");
//     setCompleted(false);
//     setLoading(false);
//   };

//   return (
//     <div className="golden-light-container">
//       <div className="smoky-overlay"></div>

//       <div className="glass-card">
//         <div className="brand-section">
//           <div className="golden-icon">✨</div>
//           <h1>devraj<span className="gold-text">reels</span></h1>
//           <p className="tagline">Instagram Reel Downloader — premium, fast & elegant</p>
//         </div>

//         <div className="input-area">
//           <div className="url-group">
//             <input
//               type="text"
//               placeholder="🔗 Paste Instagram Reel URL here..."
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               disabled={loading}
//             />
//             {completed && !loading && (
//               <button className="clear-btn" onClick={handleClear} title="New download">
//                 ✕ Clear & New
//               </button>
//             )}
//           </div>

//           {!completed && !loading && (
//             <button className="primary-download-btn" onClick={handleDownload}>
//               <span>⬇️</span> Download Reel
//             </button>
//           )}

//           {loading && (
//             <div className="luxury-loader">
//               <div className="golden-spinner"></div>
//               <span>Processing your reel...</span>
//             </div>
//           )}
//         </div>

//         {video && (
//           <div className="result-wrapper fade-up">
//             <video controls className="reel-video" playsInline>
//               <source src={video} type="video/mp4" />
//             </video>
//             <div className="action-buttons">
//               <a
//                 href={`/api/download-file?url=${encodeURIComponent(video)}`}
//                 className="download-reel-btn"
//               >
//                 💾 Download Reel (MP4)
//               </a>
//               <button onClick={handleClear} className="new-reel-btn">
//                 🔄 New Reel
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="info-grid">
//           <div className="info-item">✦ No sign-up required</div>
//           <div className="info-item">✦ High quality MP4</div>
//           <div className="info-item">✦ Instant processing</div>
//           <div className="info-item">✦ Public reels only</div>
//         </div>

//         <footer className="legal-footer">
//           <p>
//             devrajreels is an independent tool. We do not store any videos or user data.
//             All rights belong to original content owners.
//           </p>
//           <p className="copyright">© 2025 devrajreels — crafted with precision</p>
//         </footer>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState, useRef, useEffect } from "react";

const tools = [
  { 
    id: "thumbnail", 
    label: "Thumbnail", 
    icon: "fas fa-images", 
    description: "Extract high‑quality thumbnails from Instagram posts & reels",
    tip: "Get the cover image in HD"
  },
  { 
    id: "dp", 
    label: "DP", 
    icon: "fas fa-id-card", 
    description: "Download full‑size Instagram profile pictures",
    tip: "Perfect for saving display photos"
  },
  { 
    id: "reels", 
    label: "Reels", 
    icon: "fas fa-play-circle", 
    description: "Save Instagram Reels as MP4 videos",
    tip: "Highest available resolution"
  },
  { 
    id: "photos", 
    label: "Photos", 
    icon: "fas fa-camera-retro", 
    description: "Download original high‑resolution Instagram photos",
    tip: "Exact quality as posted"
  },
];

export default function DownloaderUI() {
  const [activeTool, setActiveTool] = useState("reels");
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const mainCardRef = useRef(null);
  const resultRef = useRef(null);

  // Auto‑scroll to main card on page load
  useEffect(() => {
    if (mainCardRef.current) {
      mainCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Auto‑scroll to video when download completes
  useEffect(() => {
    if (completed && video && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [completed, video]);

  // Reels logic (your existing backend)
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
    } catch (err) {
      alert("⚠️ Error occurred while processing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleComingSoon = () => {
    alert(`✨ ${activeTool.charAt(0).toUpperCase() + activeTool.slice(1)} downloader is coming in early 2026! Stay tuned.`);
  };

  const handleDownload = () => {
    if (activeTool === "reels") {
      handleReelsDownload();
    } else {
      handleComingSoon();
    }
  };

  const handleClear = () => {
    setUrl("");
    setVideo("");
    setCompleted(false);
    setErrorMsg("");
  };

  const activeToolData = tools.find(t => t.id === activeTool);

  // Detailed instructions per tool
  const getInstructions = () => {
    switch (activeTool) {
      case "thumbnail":
        return [
          "📌 Step 1: Open Instagram and go to any video post or reel.",
          "📌 Step 2: Tap the three dots (⋯) and select 'Copy link'.",
          "📌 Step 3: Paste the link in the input field above.",
          "📌 Step 4: Click 'Download' – your thumbnail will be ready instantly.",
          "✨ Pro tip: Works for both reels and regular video posts."
        ];
      case "dp":
        return [
          "📌 Step 1: Visit any Instagram profile (must be public).",
          "📌 Step 2: Copy the profile URL from your browser's address bar.",
          "📌 Step 3: Paste the URL here and click 'Download'.",
          "📌 Step 4: Save the full‑resolution profile picture.",
          "✨ Pro tip: Works for any public account, even if the DP is zoomed in."
        ];
      case "reels":
        return [
          "📌 Step 1: Find the reel you want to save.",
          "📌 Step 2: Tap the share icon and select 'Copy link'.",
          "📌 Step 3: Paste the link in the box below.",
          "📌 Step 4: Click 'Download' – we'll fetch the MP4 file.",
          "✨ Pro tip: The video quality is as high as Instagram provides."
        ];
      case "photos":
        return [
          "📌 Step 1: Open any Instagram photo post (single or carousel).",
          "📌 Step 2: Copy the link from the share menu.",
          "📌 Step 3: Paste the link and hit 'Download'.",
          "📌 Step 4: Get the original, uncompressed image.",
          "✨ Pro tip: Works for multiple images in a single post (first one)."
        ];
      default:
        return ["Paste the URL and click Download."];
    }
  };

  // Extra tips & facts
  const extraInfo = {
    thumbnail: "Instagram thumbnails are usually 1080x1080 pixels – we extract the best available version.",
    dp: "Profile pictures are often downscaled on the app; our tool fetches the original uploaded size.",
    reels: "We support all public reels, including those with music and effects. No watermarks added.",
    photos: "Even if Instagram compresses images, we retrieve the version closest to the original upload.",
  };

  // Supported formats
  const supportedFormats = {
    thumbnail: "JPG, PNG, WEBP",
    dp: "JPG, PNG",
    reels: "MP4 (video/mp4)",
    photos: "JPG, PNG, WEBP",
  };

  // FAQ data
  const faqs = [
    { q: "🔓 Is instaking.io free to use?", a: "Absolutely. No sign‑up, no hidden fees – 100% free forever." },
    { q: "🛡️ Do you store my downloaded media?", a: "No. All processing happens in real time, and files are never saved on our servers." },
    { q: "📏 Is there a file size limit?", a: "Not really. Very large reels might take a few extra seconds, but we handle them well." },
    { q: "🔒 Can I download private content?", a: "Only public Instagram content is supported due to platform restrictions." },
    { q: "⚡ Why is the download not starting?", a: "Double‑check the URL and ensure the content is public. If issues persist, refresh the page." },
    { q: "📅 Will new features arrive in 2026?", a: "Yes! Thumbnail, DP, and Photos tools are scheduled for Q1 2026." },
  ];

  return (
    <div className="ik-wrapper">
      {/* ========== AD SPACES (COMMENTED – READY FOR FUTURE) ========== */}
      {/*
      <div className="ad-space top-ad">
        <div className="ad-placeholder">Ad Space</div>
      </div>
      */}

      <div className="ik-container">
        {/* Header with logo */}
        <header className="ik-header">
          <div className="logo">
            <i className="fas fa-crown logo-icon"></i>
            <h1>insta<span className="gradient-accent">king.io</span></h1>
          </div>
          <p className="tagline">The ultimate Instagram media toolkit • 2026 edition</p>
          <div className="hero-stats">
            <span><i className="fas fa-download"></i> 100% Free</span>
            <span><i className="fas fa-bolt"></i> Instant Processing</span>
            <span><i className="fas fa-shield-alt"></i> No Registration</span>
          </div>
        </header>

        {/* Tool navigation – improved icons */}
        <div className="tool-nav">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`tool-btn ${activeTool === tool.id ? "active" : ""}`}
              onClick={() => {
                setActiveTool(tool.id);
                handleClear();
              }}
            >
              <i className={tool.icon}></i>
              <span className="tool-label">{tool.label}</span>
              <span className="tool-desc">{tool.description}</span>
              <span className="tool-tip">{tool.tip}</span>
            </button>
          ))}
        </div>

        {/* Main action card – with hover effect */}
        <div className="ik-card hover-lift" ref={mainCardRef}>
          <div className="tool-header">
            <h2><i className={activeToolData.icon}></i> {activeToolData.label} Downloader</h2>
            <p className="tool-sub">{activeToolData.description}</p>
          </div>

          <div className="input-section">
            <input
              type="text"
              placeholder="🔗 Paste Instagram URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
              className="url-input"
            />
            {errorMsg && <div className="error-msg">{errorMsg}</div>}

            <div className="action-group">
              {!completed && !loading && (
                <button className="btn primary" onClick={handleDownload}>
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
                  <i className="fas fa-times"></i> Clear & New
                </button>
              )}
            </div>
          </div>

          {/* Instructions box */}
          <div className="instructions-card">
            <h3><i className="fas fa-info-circle"></i> How to use — {activeToolData.label}</h3>
            <ul className="instruction-list">
              {getInstructions().map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            <div className="extra-info">
              <i className="fas fa-lightbulb"></i> {extraInfo[activeTool]}
            </div>
            <div className="format-info">
              <i className="fas fa-file-alt"></i> Supported formats: {supportedFormats[activeTool]}
            </div>
          </div>
        </div>

        {/* Result section – scrolls into view after download */}
        {activeTool === "reels" && video && (
          <div className="result-section hover-lift fade-up" ref={resultRef}>
            <h3><i className="fas fa-video"></i> Your Reel is ready</h3>
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

        {/* Coming soon for other tools */}
        {activeTool !== "reels" && (
          <div className="coming-soon-card hover-lift">
            <i className="fas fa-rocket"></i> Coming in 2026 – we're building the best Instagram toolset for you.
          </div>
        )}

        {/* Why choose us */}
        <div className="features-section">
          <h3>Why choose instaking.io?</h3>
          <div className="features-grid">
            <div className="feature hover-lift"><i className="fas fa-tachometer-alt"></i> Blazing fast servers</div>
            <div className="feature hover-lift"><i className="fas fa-lock"></i> 100% secure & anonymous</div>
            <div className="feature hover-lift"><i className="fas fa-infinity"></i> Unlimited downloads</div>
            <div className="feature hover-lift"><i className="fas fa-mobile-alt"></i> Works on all devices</div>
          </div>
        </div>

        {/* FAQ Section */}
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
            <p><i className="fas fa-envelope"></i> More features? Suggestions? support@instaking.io</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="ik-footer">
          <p>© 2025‑2026 instaking.io — independent tool. Respect content ownership. No data stored.</p>
          <p><i className="fas fa-code-branch"></i> Version 3.0 — 2026 ready</p>
        </footer>
      </div>

      {/* ========== AD SPACE BOTTOM (COMMENTED) ========== */}
      {/*
      <div className="ad-space bottom-ad">
        <div className="ad-placeholder">Ad Space</div>
      </div>
      */}
    </div>
  );
}