"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getRequiredField(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${fieldName} is required`);
  }

  return value.trim();
}

export async function login(formData: FormData) {
  const email = getRequiredField(formData, "email");
  const password = getRequiredField(formData, "password");

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/fantasy");
}

export async function register(formData: FormData) {
  const email = getRequiredField(formData, "email");
  const password = getRequiredField(formData, "password");
  const confirmPassword = getRequiredField(formData, "confirmPassword");

  if (password.length < 6) {
    redirect(
      `/register?error=${encodeURIComponent(
        "Password must contain at least 6 characters."
      )}`
    );
  }

  if (password !== confirmPassword) {
    redirect(
      `/register?error=${encodeURIComponent("Passwords do not match.")}`
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect(`/register?error=${encodeURIComponent(error.message)}`);
  }

  if (!data.session) {
    redirect(
      `/login?message=${encodeURIComponent(
        "Registration successful. Check your email to confirm your account."
      )}`
    );
  }

  redirect("/fantasy");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/");
}