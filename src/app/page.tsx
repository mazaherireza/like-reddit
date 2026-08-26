import type { ReactNode } from "react";

import { Button } from "@heroui/react";

import { signIn } from "@/actions";

export default function Home(): ReactNode {
  return (
    <form action={signIn}>
      <Button type="submit">Sign In</Button>
    </form>
  );
}
