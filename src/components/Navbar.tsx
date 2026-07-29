"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();

      if (isMounted) {
        setUser(currentUser);
        setIsLoading(false);
      }
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleLogout() {
    setIsLoggingOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      setIsLoggingOut(false);
      return;
    }

    setUser(null);
    router.replace("/");
    router.refresh();
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white">
            M
          </div>

          <span className="text-xl font-extrabold tracking-tight text-white">
            MMA <span className="text-red-500">Spot</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-400 md:flex">
          <Link href="/#news" className="transition hover:text-white">
            News
          </Link>

          <Link href="/#events" className="transition hover:text-white">
            Events
          </Link>

          <Link href="/#fighters" className="transition hover:text-white">
            Fighters
          </Link>

          <Link href="/#rankings" className="transition hover:text-white">
            Rankings
          </Link>

          <Link href="/fantasy" className="transition hover:text-white">
            Fantasy
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Change language"
            className="rounded-lg border border-zinc-800 px-3 py-2 text-xs font-bold text-white transition hover:border-red-500"
          >
            KA / EN
          </button>

          {!isLoading &&
            (user ? (
              <div className="flex items-center gap-3">
                <div className="hidden text-right lg:block">
                  <p className="text-xs text-zinc-500">Signed in as</p>

                  <p className="max-w-48 truncate text-sm font-semibold text-white">
                    {user.email}
                  </p>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoggingOut}
                  onClick={handleLogout}
                  className="border-zinc-700 bg-transparent text-white hover:border-red-500 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  Sign In
                </Button>
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
}