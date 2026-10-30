import { getAdminSession } from "@/lib/admin-auth";
import { getWaitlistDatabase } from "@/lib/waitlist-store.mjs";

export async function GET() {
  if (!await getAdminSession()) return new Response("Please sign in.", { status: 401 });
  try {
    const sql = getWaitlistDatabase();
    const rows = await sql`SELECT id,lead_id,name,email,business,business_type,country,website_url,goal,referral,source,referrer,attribution,status,notes,referral_outcome,consent_version,created_at,updated_at FROM website_waitlist ORDER BY created_at DESC`;
    const fields = ["id","lead_id","name","email","business","business_type","country","website_url","goal","referral","source","referrer","attribution","status","notes","referral_outcome","consent_version","created_at","updated_at"];
    const cell = value => {
      let text = value instanceof Date ? value.toISOString() : typeof value === "object" && value ? JSON.stringify(value) : String(value ?? "");
      if (/^[\s]*[=+@\-\t\r]/.test(text)) text = `'${text}`;
      return `"${text.replaceAll('"','""')}"`;
    };
    const csv = [fields.map(cell).join(","), ...rows.map(row => fields.map(key => cell(row[key])).join(","))].join("\r\n");
    return new Response(`\uFEFF${csv}`, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="zulzidan-free-website-applications.csv"', "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
  } catch { return new Response("Applications could not be exported. Please try again.", { status: 503 }); }
}
