import { Button } from "@/components/ui/button";
import { getUserSession } from "@/lib/session";
import { Sign } from "crypto";
import { signOut } from "next-auth/react";
import Link from "next/link";
import SignoutButton from "./(auth)/signout/_components/signout-button";

export default async function Home() {
  const user = await getUserSession();
  return (
    <main className="">
      {JSON.stringify(user)}

      {user ? <SignoutButton /> : <a href="/signin">sign in</a>}
    </main>
  );
}
