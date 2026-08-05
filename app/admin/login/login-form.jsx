"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ defaultEmail }) {
  const router = useRouter();
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.message || "Unable to sign in right now.");
        return;
      }

      router.replace("/admin/audits/");
      router.refresh();
    } catch {
      setError("Unable to reach the login service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          autoComplete="username"
          className="mt-2 h-12 rounded-none border-[#b9ad9d] bg-[#fffdf9]"
          disabled={loading}
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          autoComplete="current-password"
          className="mt-2 h-12 rounded-none border-[#b9ad9d] bg-[#fffdf9]"
          disabled={loading}
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
      </div>

      {error ? (
        <p className="border border-[#d18b79] bg-[#faebe6] px-4 py-3 text-sm text-[#7b281b]" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        className="h-12 w-full rounded-none bg-[#c74b2f] text-[#fffaf3] hover:bg-[#a83c26]"
        disabled={loading}
        type="submit"
      >
        {loading ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
