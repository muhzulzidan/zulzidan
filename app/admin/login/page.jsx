import Link from "next/link";
import { redirect } from "next/navigation";

import { getAdminSession, isAdminAuthConfigured } from "@/lib/admin-auth";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect("/admin/audits/");

  const configured = isAdminAuthConfigured();
  const defaultEmail = process.env.ADMIN_EMAIL || "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4efe7] px-4 py-10 text-[#18201c]">
      <section className="w-full max-w-md border border-[#cfc5b7] bg-[#fffaf3] p-6 shadow-[0_24px_70px_rgba(24,32,28,0.09)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9e3925]">
          Zulzidan admin
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
          Sign in
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#596159]">
          Access website audit submissions and customer enquiries.
        </p>

        {configured ? (
          <LoginForm defaultEmail={defaultEmail} />
        ) : (
          <p className="mt-8 border border-[#d18b79] bg-[#faebe6] px-4 py-3 text-sm leading-6 text-[#7b281b]">
            Configure ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET before signing in.
          </p>
        )}

        <Link className="mt-6 inline-block text-sm font-semibold underline underline-offset-4" href="/">
          Return to website
        </Link>
      </section>
    </main>
  );
}
