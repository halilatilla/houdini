import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Houdini Swap";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#1a237e",
            backgroundImage:
              "linear-gradient(to bottom right, #1a237e, #3949ab)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            color: "white",
          }}
        >
          <div style={{ fontSize: 60, marginBottom: 20 }}>H</div>
          <div style={{ fontSize: 40 }}>{title}</div>
          <div style={{ fontSize: 20, marginTop: 10 }}>
            Secure, Fast, Decentralized
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${(e as Error).message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
