import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "zulzidan_admin_session";
const SESSION_DURATION_SECONDS = 12 * 60 * 60;

function getConfig() {
  const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "";
  const secret = process.env.ADMIN_SESSION_SECRET || "";

  return { email, password, secret };
}

function hash(value) {
  return createHash("sha256").update(value).digest();
}

function safeEqual(left, right) {
  return timingSafeEqual(hash(left), hash(right));
}

function sign(payload, secret) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function createSessionToken(email, secret) {
  const payload = Buffer.from(
    JSON.stringify({
      email,
      expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000,
    }),
  ).toString("base64url");

  return `${payload}.${sign(payload, secret)}`;
}

function verifySessionToken(token, email, secret) {
  if (!token || !email || secret.length < 32) return null;

  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return null;
  if (!safeEqual(signature, sign(payload, secret))) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (
      typeof session.email !== "string" ||
      typeof session.expiresAt !== "number" ||
      session.expiresAt <= Date.now() ||
      !safeEqual(session.email.toLowerCase(), email)
    ) {
      return null;
    }

    return { email, expiresAt: session.expiresAt };
  } catch {
    return null;
  }
}

export function isAdminAuthConfigured() {
  const { email, password, secret } = getConfig();
  return Boolean(email && password.length >= 12 && secret.length >= 32);
}

export function verifyAdminCredentials(email, password) {
  const config = getConfig();
  if (!isAdminAuthConfigured()) return false;

  return (
    safeEqual(email.trim().toLowerCase(), config.email) &&
    safeEqual(password, config.password)
  );
}

export async function createAdminSession() {
  const { email, secret } = getConfig();
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, createSessionToken(email, secret), {
    httpOnly: true,
    maxAge: SESSION_DURATION_SECONDS,
    path: "/admin",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/admin",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function getAdminSession() {
  const { email, secret } = getConfig();
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token, email, secret);
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login/");
  return session;
}
