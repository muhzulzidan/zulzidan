import LegacyPage from "@/components/legacy-page";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.brandNewWeb;
export default function Page() { return <LegacyPage page="brandNewWeb" location={{ pathname: "/brand-new-web/" }} />; }
