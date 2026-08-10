import { NextResponse } from "next/server";

import { getDatabase } from "@/lib/db";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PLANS = new Set([
  "not-sure",
  "starter-sprint",
  "growth-team",
  "digital-department",
]);
const VALID_START_WINDOWS = new Set([
  "as-soon-as-possible",
  "within-a-month",
  "one-to-three-months",
  "exploring",
]);

function readText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function parseOptionalWebsite(value) {
  const normalized = readText(value, 2048);
  if (!normalized) return null;

  try {
    const website = new URL(normalized);
    return ["http:", "https:"].includes(website.protocol)
      ? website.toString()
      : null;
  } catch {
    return false;
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
  const organization = readText(body?.organization, 160);
  const website = parseOptionalWebsite(body?.website);
  const plan = readText(body?.plan, 32);
  const priority = readText(body?.priority, 3000);
  const startWindow = readText(body?.startWindow, 32);
  const source = readText(body?.source, 120) || "/start/";

  if (!name || !EMAIL_PATTERN.test(email) || !organization || !priority) {
    return NextResponse.json(
      {
        message:
          "Name, a valid work email, organization, and first priority are required.",
      },
      { status: 400 },
    );
  }

  if (website === false) {
    return NextResponse.json(
      { message: "Enter a complete website URL beginning with http:// or https://." },
      { status: 400 },
    );
  }

  if (!VALID_PLANS.has(plan) || !VALID_START_WINDOWS.has(startWindow)) {
    return NextResponse.json(
      { message: "Select a valid plan and desired start window." },
      { status: 400 },
    );
  }

  try {
    const sql = getDatabase();
    const [inquiry] = await sql`
      INSERT INTO project_inquiries (
        name,
        email,
        organization,
        website_url,
        plan,
        first_priority,
        start_window,
        source
      )
      VALUES (
        ${name},
        ${email},
        ${organization},
        ${website},
        ${plan},
        ${priority},
        ${startWindow},
        ${source}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        id: inquiry.id,
        createdAt: inquiry.created_at,
        bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
        message: "Your fit-call request has been received.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Unable to save project inquiry:", error);
    return NextResponse.json(
      { message: "Your request could not be saved right now." },
      { status: 500 },
    );
  }
}
