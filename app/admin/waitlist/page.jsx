import Link from "next/link";
import { requireAdminSession } from "@/lib/admin-auth";
import { getWaitlistDatabase } from "@/lib/waitlist-store.mjs";
import { WAITLIST_STATUSES } from "@/lib/waitlist-validation.mjs";
import ReviewForm from "./review-form";

export const dynamic = "force-dynamic";
export const metadata = { title: "Free website applications", robots: { index: false, follow: false } };
const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Makassar" });

export default async function WaitlistAdminPage({ searchParams }) {
  await requireAdminSession();
  const params = await searchParams;
  const filter = WAITLIST_STATUSES.includes(params.status) ? params.status : "all";
  const search = (typeof params.q === "string" ? params.q : "").slice(0, 150).trim().toLowerCase();
  let applications = [], unavailable = false;
  try {
    const sql = getWaitlistDatabase();
    applications = await sql`SELECT *, updated_at::text AS version FROM website_waitlist ORDER BY created_at DESC`;
  } catch { unavailable = true; }
  const shown = applications.filter(a => (filter === "all" || a.status === filter) && (!search || `${a.name} ${a.email} ${a.business} ${a.country} ${a.referral}`.toLowerCase().includes(search)));
  return <main className="min-h-screen bg-[#f4efe7] px-5 py-10 text-[#18201c]"><div className="mx-auto max-w-6xl">
    <header className="flex flex-wrap items-end justify-between gap-6 border-b border-[#cfc5b7] pb-7"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#9e3925]">Zulzidan admin</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Free website applications</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#566057]">Review applicants, record your next action, and connect free builds to actual referral outcomes. New applicants also appear in Zulzidan Leads under Kolaborasi.</p></div><nav className="flex flex-wrap gap-4 text-sm underline underline-offset-4" aria-label="Admin navigation"><Link href="/admin/inquiries/">Project enquiries</Link><Link href="/admin/audits/">Audits</Link><a href="https://zulzidan-leads.vercel.app/?view=collaborations" target="_blank" rel="noopener noreferrer">Open Leads ↗</a><Link href="/">Website</Link><form action="/api/admin/logout/" method="post"><button type="submit">Sign out</button></form></nav></header>
    {unavailable ? <p role="alert" className="my-8 border border-[#bd897b] bg-[#faebe6] p-5">The application database is unavailable. Check the waitlist configuration and migration before accepting applications.</p> : <>
      <div className="grid grid-cols-2 gap-4 py-7 md:grid-cols-4">{[["All applications",applications.length],["To review",applications.filter(a => a.status === "new").length],["Selected / building",applications.filter(a => ["selected","building"].includes(a.status)).length],["Delivered",applications.filter(a => a.status === "delivered").length]].map(([label,count]) => <div className="border border-[#cfc5b7] bg-[#fffaf3] p-5" key={label}><p className="text-xs uppercase tracking-wider text-[#566057]">{label}</p><p className="mt-2 text-3xl">{count}</p></div>)}</div>
      <form className="mb-8 flex flex-wrap items-end gap-4" method="get"><label className="text-sm">Status<select name="status" defaultValue={filter} className="mt-2 block border border-[#b9ad9d] bg-white p-3"><option value="all">All statuses</option>{WAITLIST_STATUSES.map(s => <option value={s} key={s}>{s}</option>)}</select></label><label className="min-w-0 grow text-sm">Search<input name="q" defaultValue={search} maxLength={150} placeholder="Name, business, email, country, referrer" className="mt-2 block w-full border border-[#b9ad9d] bg-white p-3" /></label><button className="border border-[#18201c] px-5 py-3 text-sm">Filter</button><a className="px-2 py-3 text-sm underline underline-offset-4" href="/admin/waitlist/export/">Export all CSV</a></form>
      <p className="mb-5 text-sm text-[#566057]">Showing {shown.length} of {applications.length}. Times are WITA. Status changes do not send email or change the tracker’s project stage.</p>
      <div className="grid gap-6">{shown.map(a => <article className="grid min-w-0 gap-7 border border-[#cfc5b7] bg-[#fffaf3] p-5 md:grid-cols-[1.2fr_1fr] md:p-7" key={a.id}>
        <div className="min-w-0"><div className="flex flex-wrap items-start justify-between gap-3"><h2 className="text-xl font-semibold">{a.business}</h2><span className="border border-[#b9ad9d] px-3 py-1 text-xs capitalize">{a.status}</span></div><p className="mt-2 text-sm text-[#566057]">{a.business_type} · {a.country}</p><p className="mt-5 font-semibold">{a.name}</p><a href={`mailto:${a.email}`} className="break-all text-sm underline underline-offset-4">{a.email}</a>{a.website_url && <a href={a.website_url} target="_blank" rel="noopener noreferrer" className="mt-2 block break-all text-sm underline underline-offset-4">Website / profile ↗</a>}<h3 className="mt-6 text-xs font-semibold uppercase tracking-wider">Website goal</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-7">{a.goal}</p><dl className="mt-6 grid gap-3 text-sm"><div><dt className="text-[#566057]">Introduced by / found through</dt><dd>{a.referral || "Not provided"}</dd></div><div><dt className="text-[#566057]">Campaign</dt><dd className="break-all">{Object.entries(a.attribution || {}).filter(([,v]) => v).map(([k,v]) => `${k}: ${v}`).join(" · ") || "No campaign tags"}</dd></div><div><dt className="text-[#566057]">Submitted</dt><dd>{dateFormat.format(new Date(a.created_at))} WITA</dd></div><div><dt className="text-[#566057]">Source / referring page</dt><dd className="break-all">{a.source}{a.referrer ? ` · ${a.referrer}` : ""}</dd></div><div><dt className="text-[#566057]">Contact consent</dt><dd>{a.consent_version} · recorded at submission</dd></div><div><dt className="text-[#566057]">Linked Leads record</dt><dd className="break-all font-mono text-xs">{a.lead_id}</dd></div></dl></div>
        <ReviewForm application={a} />
      </article>)}{!shown.length && <p className="border border-[#cfc5b7] p-8 text-center text-[#566057]">{applications.length ? "No applications match these filters." : "No applications yet. New submissions will appear here and in the shared lead tracker."}</p>}</div>
    </>}
  </div></main>;
}
