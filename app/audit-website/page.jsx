import LegacyPage from "@/components/legacy-page";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.auditWebsite;
export default function Page() { return <LegacyPage page="auditWebsite" location={{ pathname: "/audit-website/" }} />; }
