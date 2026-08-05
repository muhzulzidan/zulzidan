import { NextResponse } from "next/server";

import {
  createAdminSession,
  isAdminAuthConfigured,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

const attempts = new Map();
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function getClientKey(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function getActiveAttempts(key) {
  const now = Date.now();
  const active = (attempts.get(key) || []).filter(
    (attemptedAt) => now - attemptedAt < ATTEMPT_WINDOW_MS,
  );
  attempts.set(key, active);
  return active;
}

export async function POST(request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      { message: "Admin login is not configured." },
      { status: 503 },
    );
  }

  const clientKey = getClientKey(request);
  const activeAttempts = getActiveAttempts(clientKey);

  if (activeAttempts.length >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { message: "Too many login attempts. Try again in 15 minutes." },
      { status: 429, headers: { "Retry-After": "900" } },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const email = typeof body?.email === "string" ? body.email : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!verifyAdminCredentials(email, password)) {
    attempts.set(clientKey, [...activeAttempts, Date.now()]);
    return NextResponse.json(
      { message: "The email or password is incorrect." },
      { status: 401 },
    );
  }

  attempts.delete(clientKey);
  await createAdminSession();

  return NextResponse.json({ message: "Signed in successfully." });
}
