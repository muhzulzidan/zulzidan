import { createMetadata } from "@/lib/site";
import WaitlistPage from "./waitlist-page";

export const metadata = createMetadata({
  title: "Apply for a Free Website",
  description: "Join Zulzidan's free website waitlist. A focused one-page website for selected service businesses, with no build fee or required support subscription.",
  path: "/free-website/",
  image: "/social/zulzidan-free-website-v1.png",
});

export default function FreeWebsitePage() { return <WaitlistPage />; }
