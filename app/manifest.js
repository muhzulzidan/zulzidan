export default function manifest() {
  return {
    name: "Zulzidan",
    short_name: "Zulzidan",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f1f1",
    theme_color: "#000000",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
