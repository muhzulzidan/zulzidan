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
  title: "Website audit requests",
  robots: { index: false, follow: false },
};

const dateFormatter = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Makassar",
});

function formatDate(value) {
  return dateFormatter.format(new Date(value));
}

async function getAuditRequests() {
  const sql = getDatabase();
  return sql`
    SELECT
      id,
      name,
      email,
      website_url,
      main_concern,
      status,
      created_at,
      updated_at,
      created_at >= NOW() - INTERVAL '7 days' AS is_recent
    FROM audit_requests
    ORDER BY created_at DESC
  `;
}

export default async function AuditRequestsAdminPage() {
  const session = await requireAdminSession();
  const userEmail = session.email;

  const requests = await getAuditRequests();
  const newRequests = requests.filter(({ status }) => status === "new").length;
  const recentRequests = requests.filter(({ is_recent }) => is_recent).length;

  return (
    <main className="min-h-screen bg-[#f4efe7] px-4 py-8 text-[#18201c] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[100rem]">
        <header className="flex flex-col gap-5 border-b border-[#cfc5b7] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9e3925]">
              Zulzidan admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Website audit requests
            </h1>
            <p className="mt-2 text-sm text-[#596159]">
              Signed in as {userEmail}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link className="underline underline-offset-4" href="/">
              View website
            </Link>
            <form action="/api/admin/logout/" method="post">
              <button
                className="border border-[#18201c] px-4 py-2 transition-colors hover:bg-[#18201c] hover:text-[#fffaf3]"
                type="submit"
              >
                Sign out
              </button>
            </form>
          </div>
        </header>

        <section className="grid gap-4 py-7 sm:grid-cols-3" aria-label="Audit request summary">
          <div className="border border-[#cfc5b7] bg-[#fffaf3] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f776f]">
              Total requests
            </p>
            <p className="mt-3 text-3xl font-semibold">{requests.length}</p>
          </div>
          <div className="border border-[#cfc5b7] bg-[#fffaf3] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f776f]">
              New
            </p>
            <p className="mt-3 text-3xl font-semibold">{newRequests}</p>
          </div>
          <div className="border border-[#cfc5b7] bg-[#fffaf3] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f776f]">
              Last 7 days
            </p>
            <p className="mt-3 text-3xl font-semibold">{recentRequests}</p>
          </div>
        </section>

        <section className="overflow-hidden border border-[#cfc5b7] bg-[#fffaf3]" aria-labelledby="requests-table-heading">
          <div className="border-b border-[#cfc5b7] px-5 py-4">
            <h2 id="requests-table-heading" className="text-lg font-semibold">
              All submissions
            </h2>
            <p className="mt-1 text-sm text-[#596159]">
              Every audit request currently stored in Postgres.
            </p>
          </div>

          <Table>
            <TableHeader className="bg-[#eee6da]">
              <TableRow className="hover:bg-[#eee6da]">
                <TableHead className="whitespace-nowrap">ID</TableHead>
                <TableHead className="whitespace-nowrap">Submitted</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="min-w-72">Main concern</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="whitespace-nowrap">Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.length ? (
                requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-mono text-xs text-[#6f776f]">
                      {request.id}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatDate(request.created_at)}
                    </TableCell>
                    <TableCell className="font-semibold">{request.name}</TableCell>
                    <TableCell>
                      <a className="underline underline-offset-4" href={`mailto:${request.email}`}>
                        {request.email}
                      </a>
                    </TableCell>
                    <TableCell>
                      <a
                        className="block max-w-64 truncate underline underline-offset-4"
                        href={request.website_url}
                        rel="noreferrer"
                        target="_blank"
                        title={request.website_url}
                      >
                        {request.website_url}
                      </a>
                    </TableCell>
                    <TableCell className="max-w-md whitespace-pre-wrap leading-6 text-[#454f48]">
                      {request.main_concern || "—"}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex border border-[#8ba08e] bg-[#edf2eb] px-2.5 py-1 text-xs font-semibold capitalize text-[#27442f]">
                        {request.status}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatDate(request.updated_at)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell className="h-32 text-center text-[#596159]" colSpan={8}>
                    No audit requests have been submitted yet.
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
