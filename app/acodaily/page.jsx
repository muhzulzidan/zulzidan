import { redirect } from "next/navigation";
export const metadata = { title: "Redirecting…", robots: { index: false, follow: false } };
export default function Page() { redirect("https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan%2C%20saya%20mau%20tahu%20ratecard%20aco%20daily"); }
