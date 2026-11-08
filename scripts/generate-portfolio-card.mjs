import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const [regular, medium, preview] = await Promise.all([
  readFile(new URL("src/fonts/poppins/files/poppins-latin-400-normal.woff", root)),
  readFile(new URL("src/fonts/poppins/files/poppins-latin-500-normal.woff", root)),
  readFile(new URL("public/work/tasfrl.webp", root)),
]);
const previewPng = await sharp(preview).png().toBuffer();

const card = h("div", {
  style: { display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "40px 48px", background: "#f4efe7", color: "#18201c", fontFamily: "Poppins", borderTop: "8px solid #8f3827" },
},
  h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20 } },
    h("span", { style: { fontWeight: 500, fontSize: 30, letterSpacing: -1 } }, "Zulzidan"),
    h("span", { style: { color: "#8f3827", fontSize: 13, letterSpacing: 2 } }, "SELECTED WEBSITES & CREATIVE WORK"),
  ),
  h("div", { style: { display: "flex", alignItems: "center", gap: 44, marginTop: 32, flex: 1 } },
    h("div", { style: { display: "flex", flexDirection: "column", width: 560 } },
      h("div", { style: { display: "flex", fontSize: 58, lineHeight: 1.15, letterSpacing: -2.5 } }, "Good work deserves"),
      h("div", { style: { display: "flex", fontSize: 58, lineHeight: 1.15, letterSpacing: -2.5, color: "#8f3827" } }, "a great website."),
      h("div", { style: { display: "flex", fontSize: 18, lineHeight: 1.6, color: "#4f5a54", marginTop: 24 } }, "Websites for businesses, creatives, and organizations. Built by Muhammad Zulzidan."),
    ),
    h("div", { style: { display: "flex", flexDirection: "column", width: 480 } },
      h("img", { src: `data:image/png;base64,${previewPng.toString("base64")}`, width: 480, height: 360 }),
      h("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 15 } },
        h("span", { style: { fontWeight: 500 } }, "Featured: TASFRL"),
        h("span", { style: { color: "#8f3827" } }, "Texas, USA"),
      ),
    ),
  ),
  h("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 14, marginTop: 20, paddingTop: 16, borderTop: "1px solid #cec4b7" } },
    h("span", null, "Client websites · Creative portfolios · Interactive demos"),
    h("span", { style: { color: "#8f3827", fontWeight: 500 } }, "zulzidan.com"),
  ),
);

const response = new ImageResponse(card, {
  width: 1200, height: 630,
  fonts: [
    { name: "Poppins", data: regular, weight: 400, style: "normal" },
    { name: "Poppins", data: medium, weight: 500, style: "normal" },
  ],
});
await writeFile(new URL("public/social/zulzidan-portfolio-v1.png", root), Buffer.from(await response.arrayBuffer()));
console.log("Generated portfolio social preview (1200 × 630)");
