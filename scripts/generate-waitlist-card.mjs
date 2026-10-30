import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const root = new URL("../", import.meta.url);
const [font, logo] = await Promise.all([readFile(new URL("src/fonts/poppins/files/poppins-latin-500-normal.woff",root)), readFile(new URL("public/wordmark.svg",root))]);
const card = h("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"#f4efe7",color:"#18201c",fontFamily:"Poppins",padding:"48px 64px",borderTop:"9px solid #9e3925"}},
  h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},h("img",{src:`data:image/svg+xml;base64,${logo.toString("base64")}`,width:180,height:57}),h("span",{style:{fontSize:17,letterSpacing:2,color:"#566057"}},"THE FREE WEBSITE PROGRAM")),
  h("div",{style:{display:"flex",flexDirection:"column",marginTop:48}},h("div",{style:{fontSize:82,letterSpacing:-4,lineHeight:1.18}},"Your next website."),h("div",{style:{fontSize:82,letterSpacing:-4,lineHeight:1.18,color:"#9e3925"}},"Built for free.")),
  h("div",{style:{fontSize:24,color:"#566057",marginTop:28}},"A focused one-page website for selected service businesses."),
  h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #cec6ba",paddingTop:22,marginTop:"auto",fontSize:21}},h("span",null,"Apply to join the waitlist."),h("span",{style:{color:"#9e3925"}},"zulzidan.com")),
);
const response = new ImageResponse(card,{width:1200,height:630,fonts:[{name:"Poppins",data:font,weight:500,style:"normal"}]});
await mkdir(new URL("public/social/",root),{recursive:true});
await writeFile(new URL("public/social/zulzidan-free-website-v1.png",root),Buffer.from(await response.arrayBuffer()));
console.log("Generated free website social card (1200 × 630).");
