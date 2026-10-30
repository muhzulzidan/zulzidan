import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requireAdminSession } from "@/lib/admin-auth";
import { getDatabase } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Project enquiries",
  robots: { index: false, follow: false },
};

const dateFormatter = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Makassar",
});

const planLabels = {
  "not-sure": "Not sure",
  "starter-sprint": "Starter Sprint",
  "growth-team": "Growth Team",
  "digital-department": "Digital Department",
};

const startLabels = {
  "as-soon-as-possible": "ASAP",
  "within-a-month": "Within a month",
  "one-to-three-months": "1–3 months",
  exploring: "Exploring",
};

function formatDate(value) {
  return dateFormatter.format(new Date(value));
}

async function getProjectInquiries() {
  const sql = getDatabase();
  return sql`
    SELECT
      id,
      name,
      email,
      organization,
      website_url,
      plan,
      first_priority,
      start_window,
      source,
      status,
      created_at,
      updated_at,
      created_at >= NOW() - INTERVAL '7 days' AS is_recent
    FROM project_inquiries
    ORDER BY created_at DESC
  `;
}

export default async function ProjectInquiriesAdminPage() {
  const session = await requireAdminSession();
  const requests = await getProjectInquiries();
  const newRequests = requests.filter(({ status }) => status === "new").length;
  const recentRequests = requests.filter(({ is_recent }) => is_recent).length;

  return (
    <main className="min-h-screen bg-[#f4efe7] px-4 py-8 text-[#18201c] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[112rem]">
        <header className="flex flex-col gap-5 border-b border-[#cfc5b7] pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9e3925]">
              Zulzidan admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Project enquiries
            </h1>
            <p className="mt-2 text-sm text-[#596159]">
              Signed in as {session.email}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold" aria-label="Admin navigation">
            <Link className="pb-1 underline-offset-4 hover:underline" href="/admin/waitlist/">Free website applications</Link>
            <Link className="border-b-2 border-[#9e3925] pb-1" href="/admin/inquiries/">
              Project enquiries
            </Link>
            <Link className="pb-1 underline-offset-4 hover:underline" href="/admin/audits/">
              Website audits
            </Link>
            <Link className="pb-1 underline-offset-4 hover:underline" href="/">
              View website
            </Link>
            <form action="/api/admin/logout/" method="post">
              <button className="border border-[#18201c] px-4 py-2 transition-colors hover:bg-[#18201c] hover:text-[#fffaf3]" type="submit">
                Sign out
              </button>
            </form>
          </nav>
        </header>

        <section className="grid gap-4 py-7 sm:grid-cols-3" aria-label="Project enquiry summary">
          {[
            ["Total enquiries", requests.length],
            ["New", newRequests],
            ["Last 7 days", recentRequests],
          ].map(([label, value]) => (
            <div className="border border-[#cfc5b7] bg-[#fffaf3] p-5" key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f776f]">{label}</p>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section className="overflow-hidden border border-[#cfc5b7] bg-[#fffaf3]" aria-labelledby="inquiries-table-heading">
          <div className="border-b border-[#cfc5b7] px-5 py-4">
            <h2 id="inquiries-table-heading" className="text-lg font-semibold">All enquiries</h2>
            <p className="mt-1 text-sm text-[#596159]">Fit-call requests submitted through the Digital Team funnel.</p>
          </div>

          <Table>
            <TableHeader className="bg-[#eee6da]">
              <TableRow className="hover:bg-[#eee6da]">
                <TableHead>Submitted</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Start</TableHead>
                <TableHead className="min-w-80">First priority</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.length ? requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="whitespace-nowrap align-top">
                    <span className="block font-medium">{formatDate(request.created_at)}</span>
                    <span className="font-mono text-xs text-[#6f776f]">ZD-{String(request.id).padStart(4, "0")}</span>
                  </TableCell>
                  <TableCell className="align-top">
                    <strong className="block">{request.name}</strong>
                    <a className="underline underline-offset-4" href={`mailto:${request.email}`}>{request.email}</a>
                  </TableCell>
                  <TableCell className="align-top">
                    <strong className="block">{request.organization}</strong>
                    {request.website_url ? (
                      <a className="block max-w-56 truncate underline underline-offset-4" href={request.website_url} rel="noreferrer" target="_blank">
                        {request.website_url}
                      </a>
                    ) : <span className="text-[#6f776f]">No website</span>}
                  </TableCell>
                  <TableCell className="align-top">{planLabels[request.plan] || request.plan}</TableCell>
                  <TableCell className="whitespace-nowrap align-top">{startLabels[request.start_window] || request.start_window}</TableCell>
                  <TableCell className="whitespace-pre-wrap align-top leading-6 text-[#454f48]">{request.first_priority}</TableCell>
                  <TableCell className="align-top">
                    <span className="inline-flex border border-[#8ba08e] bg-[#edf2eb] px-2.5 py-1 text-xs font-semibold capitalize text-[#27442f]">
                      {request.status}
                    </span>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell className="h-32 text-center text-[#596159]" colSpan={7}>
                    No project enquiries have been submitted yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
}
