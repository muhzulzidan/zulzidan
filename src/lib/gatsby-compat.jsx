"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "./site";

export function Link({ to, activeClassName = "", partiallyActive = false, className = "", ...props }) {
  const pathname = usePathname();
  const target = to || "/";
  const normalizedTarget = target.replace(/\/$/, "") || "/";
  const normalizedPath = pathname?.replace(/\/$/, "") || "/";
  const active = partiallyActive
    ? normalizedTarget !== "/" && normalizedPath.startsWith(normalizedTarget)
    : normalizedPath === normalizedTarget;

  return (
    <NextLink href={target} className={`${className} ${active ? activeClassName : ""}`.trim()} {...props} />
  );
}

export function navigate(destination) {
  if (typeof window !== "undefined") window.location.assign(destination);
}

export function graphql(strings, ...values) {
  if (typeof strings === "string") return strings;
  return strings.reduce((result, part, index) => result + part + (values[index] ?? ""), "");
}

export function useStaticQuery() {
  return { site: { siteMetadata: { ...SITE, siteUrl: SITE.url, twitterUsername: SITE.twitter } } };
}
