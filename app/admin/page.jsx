import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/admin-auth";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const session = await getAdminSession();
  redirect(session ? "/admin/audits/" : "/admin/login/");
}
