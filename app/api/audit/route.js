import { NextResponse } from "next/server";

import { getDatabase } from "@/lib/db";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function parseWebsite(value) {
  try {
    const website = new URL(value);
    return ["http:", "https:"].includes(website.protocol)
      ? website.toString()
      : null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const name = readText(body?.name, 120);
  const email = readText(body?.email, 254).toLowerCase();
  const website = parseWebsite(readText(body?.website, 2048));
  const mainConcern = readText(body?.mainConcern, 5000) || null;

  if (!name || !EMAIL_PATTERN.test(email) || !website) {
    return NextResponse.json(
      { message: "Name, a valid email, and a valid website URL are required." },
      { status: 400 },
    );
  }

  try {
    const sql = getDatabase();
    const [auditRequest] = await sql`
      INSERT INTO audit_requests (name, email, website_url, main_concern)
      VALUES (${name}, ${email}, ${website}, ${mainConcern})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        id: auditRequest.id,
        createdAt: auditRequest.created_at,
        message: "Your free website review has been requested.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Unable to save audit request:", error);
    return NextResponse.json(
      { message: "The review request could not be saved right now." },
      { status: 500 },
    );
  }
}
