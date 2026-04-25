
import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const videoUrl = searchParams.get("url");

    const response = await axios.get(videoUrl, {
      responseType: "stream",
    });

    return new Response(response.data, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": "attachment; filename=reel.mp4",
      },
    });

  } catch (err) {
    return new Response("Download failed", { status: 500 });
  }
}