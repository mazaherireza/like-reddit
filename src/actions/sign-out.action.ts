"use server";

import { signOut } from "@/auth";

export async function signOutAction(): Promise<void> {
  return signOut("github");
}