import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { validateApplication } from "@/lib/waitlist-validation.mjs";
import { acceptRequest, saveApplication } from "@/lib/waitlist-store.mjs";

export const runtime = "nodejs";

const json = (message, status) => NextResponse.json({ message }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request) {
  const origin = request.headers.get("origin");
  // Next may normalize the internal request URL to localhost in a local
  // production server. The incoming Host retains the public origin's host.
  const expectedOrigin = new URL(request.url);
  expectedOrigin.host = request.headers.get("host") || expectedOrigin.host;
  if ((origin && origin !== expectedOrigin.origin) || request.headers.get("sec-fetch-site") === "cross-site") return json("Please submit the form from this website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return json("Please submit the application form.", 415);
  if (Number(request.headers.get("content-length")) > 16000) return json("Your application is too long.", 413);
  let body;
  try {
    const text = await request.text();
    if (text.length > 16000) return json("Your application is too long.", 413);
    body = JSON.parse(text);
  } catch { return json("Please check your application and try again.", 400); }
  if (body?.companyWebsite) return json("Your application has been received.", 200);
  let application;
  try { application = validateApplication(body); }
  catch (error) { return json(error.message, 400); }
  try {
    if (!process.env.ADMIN_SESSION_SECRET) throw new Error("Waitlist rate limiting is not configured.");
    const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const key = createHmac("sha256", process.env.ADMIN_SESSION_SECRET).update(`waitlist:${ip}`).digest("hex");
    if (!await acceptRequest(key)) return NextResponse.json({ message: "Too many applications from this connection. Please try again in an hour." }, { status: 429, headers: { "Retry-After": "3600", "Cache-Control": "no-store" } });
    await saveApplication(application);
    // A retry or existing email receives the same answer without exposing applicant details.
    return json("Your application has been received.", 200);
  } catch {
    console.error("Unable to save free website application.");
    return json("Your application could not be saved. Please try again, or email mail@zulzidan.com.", 503);
  }
}
