import LegacyPage from "@/components/legacy-page";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata.services;
export default function Page() { return <LegacyPage page="services" location={{ pathname: "/services/" }} />; }
