"use client";

import { type ReactNode } from "react";

import { useSession } from "next-auth/react";

export default function ProfileComponent(): ReactNode {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: user is signed in</div>;
  }

  return <div>User isn't signed in</div>;
}
