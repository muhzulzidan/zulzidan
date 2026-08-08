import { createMetadata } from "@/lib/site";

import DigitalTeamPage from "./digital-team/page";

export const metadata = createMetadata({
  title: "Your Dedicated Digital Team",
  description:
    "A coordinated remote team for web development, automation, content, CMS, and digital operations—for one predictable monthly fee.",
  path: "/",
});

export default function HomePage() {
  return <DigitalTeamPage />;
}
