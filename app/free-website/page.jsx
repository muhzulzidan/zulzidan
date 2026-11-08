import { createMetadata } from "@/lib/site";
import WaitlistPage from "./waitlist-page";

export const metadata = createMetadata({
  title: "Request a Free Starter Website",
  description: "Tell Zulzidan about your business and request a focused one-page starter website. No build fee or required support subscription. Projects depend on scope and availability.",
  path: "/free-website/",
  image: "/social/zulzidan-free-website-v1.png",
});

export default function FreeWebsitePage() { return <WaitlistPage />; }
