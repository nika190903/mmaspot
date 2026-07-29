import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

type AdminProfile = {
  id: string;
  is_admin: boolean;
};

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, is_admin")
    .eq("id", user.id)
    .single<AdminProfile>();

  if (error || !profile?.is_admin) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
            MMA Spot Control Center
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
            Admin Panel
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Manage fighters, UFC events, fight cards, results, and Fantasy
            content from one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AdminCard
            title="Fighters"
            description="Add, edit, and manage fighters, records, divisions, rankings, and profile images."
            href="/admin/fighters"
            action="Manage Fighters"
          />

          <AdminCard
            title="Events"
            description="Create UFC events, set event dates, venues, locations, and Fantasy lock times."
            href="/admin/events"
            action="Manage Events"
          />

          <AdminCard
            title="Fight Cards"
            description="Build event fight cards, select red and blue corner fighters, and set bout order."
            href="/admin/fights"
            action="Manage Fights"
          />

          <AdminCard
            title="Results"
            description="Enter winners, methods, rounds, and final fight results after each event."
            href="/admin/results"
            action="Manage Results"
          />

          <AdminCard
            title="Fantasy"
            description="Review entries, submitted predictions, scoring status, and Wild Card usage."
            href="/admin/fantasy"
            action="Manage Fantasy"
          />

          <AdminCard
            title="Users"
            description="Review registered users, XP, career ranks, participation, and prediction statistics."
            href="/admin/users"
            action="Manage Users"
          />
        </div>
      </div>
    </main>
  );
}

type AdminCardProps = {
  title: string;
  description: string;
  href: string;
  action: string;
};

function AdminCard({
  title,
  description,
  href,
  action,
}: AdminCardProps) {
  return (
    <article className="group flex min-h-[280px] flex-col rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/60">
      <div className="flex-1">
        <div className="mb-5 h-2 w-14 rounded-full bg-red-600" />

        <h2 className="text-2xl font-black uppercase tracking-tight text-white">
          {title}
        </h2>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      </div>

      <Link
        href={href}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-red-600 hover:text-white"
      >
        {action}
      </Link>
    </article>
  );
}
