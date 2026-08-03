export default function manifest() {
  return {
    name: "Zulzidan",
    short_name: "Zulzidan",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe7",
    theme_color: "#f4efe7",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
