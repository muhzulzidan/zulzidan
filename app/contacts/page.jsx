import LegacyPage from "@/components/legacy-page";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.contacts;
export default function Page() { return <LegacyPage page="contacts" location={{ pathname: "/contacts/" }} />; }
