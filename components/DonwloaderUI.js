// "use client";
// import { useState } from "react";

// export default function DownloaderUI() {
//   const [url, setUrl] = useState("");
//   const [video, setVideo] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       setLoading(true);
//       setVideo("");

//       const res = await fetch("/api/download", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // ✅ FIX
//         },
//         body: JSON.stringify({ url }),
//       });

//       // ✅ SAFETY CHECK
//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(text || "Request failed");
//       }

//       const data = await res.json();

//       if (!data.videoUrl) {
//         alert("Video not found");
//         return;
//       }

//       setVideo(data.videoUrl);

//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Instagram Reel Downloader</h1>

//       <input
//         type="text"
//         placeholder="Paste Instagram Reel URL..."
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />

//       <button onClick={handleDownload}>
//         {loading ? "Processing..." : "Get Download Link"}
//       </button>

//       {video && (
//         <a
//           href={`/api/download-file?url=${encodeURIComponent(video)}`}
//           className="btn-download"
//         >
//           Download MP4
//         </a>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// export default function DownloaderUI() {
//   const [url, setUrl] = useState("");
//   const [video, setVideo] = useState("");
//   const [thumb, setThumb] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       setLoading(true);
//       setVideo("");
//       setThumb("");

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
//       setThumb(data.thumbnail);

//     } catch (err) {
//       alert("Error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="card">

//         <h1 className="title">Instagram Reel Downloader</h1>

//         <input
//           type="text"
//           placeholder="Paste Instagram Reel URL..."
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />

//         <button className="gold-btn" onClick={handleDownload}>
//           {loading ? <span className="loader"></span> : "Download"}
//         </button>

//         {thumb && (
//           <div className="preview">
//             <img src={thumb} alt="thumbnail" />
//           </div>
//         )}

//         {video && (
//           <video controls className="video-preview">
//             <source src={video} type="video/mp4" />
//           </video>
//         )}

//         {video && (
//           <a
//             href={`/api/download-file?url=${encodeURIComponent(video)}`}
//             className="download-final"
//           >
//             Download Video
//           </a>
//         )}
  
//       </div>

   
//     </div>
//   );
// }



"use client";
import { useState } from "react";

export default function DownloaderUI() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      setVideo("");
      setCompleted(false);

      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!data.videoUrl) {
        alert("Video not found");
        return;
      }

      setVideo(data.videoUrl);
      setCompleted(true);
    } catch (err) {
      alert("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUrl("");
    setVideo("");
    setCompleted(false);
    setLoading(false);
  };

  return (
    <div className="golden-light-container">
      <div className="smoky-overlay"></div>

      <div className="glass-card">
        <div className="brand-section">
          <div className="golden-icon">✨</div>
          <h1>devraj<span className="gold-text">reels</span></h1>
          <p className="tagline">Instagram Reel Downloader — premium, fast & elegant</p>
        </div>

        <div className="input-area">
          <div className="url-group">
            <input
              type="text"
              placeholder="🔗 Paste Instagram Reel URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            {completed && !loading && (
              <button className="clear-btn" onClick={handleClear} title="New download">
                ✕ Clear & New
              </button>
            )}
          </div>

          {!completed && !loading && (
            <button className="primary-download-btn" onClick={handleDownload}>
              <span>⬇️</span> Download Reel
            </button>
          )}

          {loading && (
            <div className="luxury-loader">
              <div className="golden-spinner"></div>
              <span>Processing your reel...</span>
            </div>
          )}
        </div>

        {video && (
          <div className="result-wrapper fade-up">
            <video controls className="reel-video" playsInline>
              <source src={video} type="video/mp4" />
            </video>
            <div className="action-buttons">
              <a
                href={`/api/download-file?url=${encodeURIComponent(video)}`}
                className="download-reel-btn"
              >
                💾 Download Reel (MP4)
              </a>
              <button onClick={handleClear} className="new-reel-btn">
                🔄 New Reel
              </button>
            </div>
          </div>
        )}

        <div className="info-grid">
          <div className="info-item">✦ No sign-up required</div>
          <div className="info-item">✦ High quality MP4</div>
          <div className="info-item">✦ Instant processing</div>
          <div className="info-item">✦ Public reels only</div>
        </div>

        <footer className="legal-footer">
          <p>
            devrajreels is an independent tool. We do not store any videos or user data.
            All rights belong to original content owners.
          </p>
          <p className="copyright">© 2025 devrajreels — crafted with precision</p>
        </footer>
      </div>
    </div>
  );
}