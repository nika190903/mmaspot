"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    if (data.session) {
      router.replace("/fantasy");
      router.refresh();
      return;
    }

    setSuccessMessage(
      "Registration successful. Check your email and confirm your account before signing in."
    );

    setPassword("");
    setConfirmPassword("");
    setIsLoading(false);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-24 text-white">
      <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[160px]" />

      <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-red-900/20 blur-[150px]" />

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
            Create Account
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Register to make Fantasy predictions and earn points.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {errorMessage && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <p>{successMessage}</p>

              <Link
                href="/login"
                className="mt-3 inline-block font-bold text-white underline"
              >
                Go to Sign In
              </Link>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
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
                minLength={6}
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 6 characters"
                className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Repeat your password"
                className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-xl bg-red-600 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-red-500 transition hover:text-red-400"
            >
              Sign in
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