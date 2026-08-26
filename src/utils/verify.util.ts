import { auth } from "@/auth";

import { type Session } from "next-auth";

export async function verify(): Promise<Session | null> {
  const session = await auth();

  return session; // session?.user
}
