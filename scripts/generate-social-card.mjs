import { readFile, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

// Static, self-contained PNG: link crawlers need no JavaScript or font requests.
const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root));
const [regular, medium, logo] = await Promise.all([
  read("src/fonts/poppins/files/poppins-latin-400-normal.woff"),
  read("src/fonts/poppins/files/poppins-latin-500-normal.woff"),
  read("src/svg/logoFull.svg"),
]);

const card = h(
  "div",
  {
    style: {
      width: "100%", height: "100%", display: "flex", flexDirection: "column",
      background: "#f4efe7", color: "#18201c", fontFamily: "Poppins",
      padding: "56px 64px 40px", borderTop: "10px solid #c74b2f",
    },
  },
  h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
    h("img", { src: `data:image/svg+xml;base64,${logo.toString("base64")}`, width: 228, height: 72 }),
    h("span", { style: { fontSize: 18, letterSpacing: 2, color: "#4f5a54" } }, "YOUR FRACTIONAL DIGITAL TEAM"),
  ),
  h("div", { style: { display: "flex", flexDirection: "column", marginTop: 59 } },
    h("div", { style: { fontSize: 76, fontWeight: 500, letterSpacing: -3.5, lineHeight: 1.18 } }, "Your digital department."),
    h("div", { style: { fontSize: 76, fontWeight: 500, letterSpacing: -3.5, lineHeight: 1.18, color: "#b6432c" } }, "Without the overhead."),
    h("div", { style: { fontSize: 27, marginTop: 26, color: "#4f5a54" } }, "Websites, automation, content & ongoing support."),
  ),
  h("div", {
    style: {
      display: "flex", alignItems: "center", justifyContent: "space-between",
      marginTop: "auto", paddingTop: 24, borderTop: "1px solid #cec4b7", fontSize: 22,
    },
  },
  h("span", null, "One partner. From strategy to delivery."),
  h("span", { style: { fontWeight: 500, color: "#b6432c" } }, "zulzidan.com"),
  ),
);

const response = new ImageResponse(card, {
  width: 1200,
  height: 630,
  fonts: [
    { name: "Poppins", data: regular, weight: 400, style: "normal" },
    { name: "Poppins", data: medium, weight: 500, style: "normal" },
  ],
});

await mkdir(new URL("public/social/", root), { recursive: true });
const output = new URL("public/social/zulzidan-digital-team-v1.png", root);
await writeFile(output, Buffer.from(await response.arrayBuffer()));
console.log(`Generated ${fileURLToPath(output)} (1200 × 630)`);
