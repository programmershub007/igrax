import axios from "axios";
import * as cheerio from "cheerio";

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    // Convert to SnapDownloader URL
    const encodedUrl = encodeURIComponent(url);
    const snapUrl = `https://snapdownloader.com/tools/instagram-reels-downloader/download?url=${encodedUrl}`;

    // Fetch HTML
    const response = await axios.get(snapUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    let videoUrl = "";
    let thumbnail = "";

    // ✅ Extract MP4
    $("a").each((_, el) => {
      const href = $(el).attr("href");

      if (href && href.includes(".mp4")) {
        videoUrl = href;
      }
    });

    // ✅ Extract Thumbnail EXACTLY like your format (.jpg inside <a>)
    $("a").each((_, el) => {
      const href = $(el).attr("href");

      if (
        href &&
        href.includes(".jpg") &&
        href.includes("cdninstagram")
      ) {
        thumbnail = href;
      }
    });

    if (!videoUrl) {
      return Response.json({ error: "Video not found" }, { status: 404 });
    }

    return Response.json({
      videoUrl,
      thumbnail,
    });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}