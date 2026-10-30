import { createMetadata } from "@/lib/site";

import WaitlistPage from "./free-website/waitlist-page";

export const metadata = createMetadata({
  title: "Free Website Program for Service Businesses",
  description:
    "Apply for a free, professionally built one-page website by Zulzidan. For service businesses ready for a clearer online presence. Selected applications, no build fee.",
  path: "/",
  image: "/social/zulzidan-free-website-v1.png",
});

export default function HomePage() {
  return <WaitlistPage />;
}
