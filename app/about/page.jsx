import LegacyPage from "@/components/legacy-page";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.about;
export default function Page() { return <LegacyPage page="about" location={{ pathname: "/about/" }} />; }
