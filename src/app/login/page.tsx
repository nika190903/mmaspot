"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    router.replace("/");
    router.refresh();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-24 text-white">
      <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[160px]" />

      <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-red-900/20 blur-[150px]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-black">
              M
            </div>

            <span className="text-2xl font-extrabold">
              MMA <span className="text-red-500">Spot</span>
            </span>
          </Link>

          <h1 className="mt-8 text-3xl font-black uppercase tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Sign in to participate in MMA Spot Fantasy.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {errorMessage && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-xl bg-red-600 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-red-500 transition hover:text-red-400"
            >
              Create account
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 block text-center text-sm font-semibold text-zinc-500 transition hover:text-white"
        >
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
}