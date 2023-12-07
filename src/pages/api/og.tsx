import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

// Make sure the font exists in the specified path:
const inter = fetch(
  new URL("../../../assets/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const robotoSlab = fetch(
  new URL("../../../assets/RobotoSlab-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const _inter = await inter;
  const _robotoSlab = await robotoSlab;

  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const hasDescription = searchParams.has("description");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Reusable UI";
    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 100)
      : "Customizable React Components.";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 25,
            justifyContent: "center",
            flexDirection: "column",
            backgroundSize: "100px 100px",
            backgroundColor: "white",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 3%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 3%, transparent 0%)",
            letterSpacing: -2,
            textAlign: "center",
          }}
        >
          <div
            style={{
              left: 30,
              top: 35,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 60, fontFamily: '"Inter"' }}>
              ui.ramoz.dev
            </span>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 900,
              fontSize: 140,
              fontFamily: '"RobotoSlab"',
            }}
          >
            {title}
          </div>
          <div
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontSize: 50,
              fontWeight: 500,
              textAlign: "start",
              marginLeft: 5,
              fontFamily: '"Inter"',
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: _inter,
            style: "normal",
          },
          {
            name: "RobotoSlab",
            data: _robotoSlab,
            style: "normal",
          },
        ],
      }
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
