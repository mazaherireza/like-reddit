"use server";

import { } from "@/auth";

export async function signInAction(): Promise<void> {
  return auth.signIn("github");
}