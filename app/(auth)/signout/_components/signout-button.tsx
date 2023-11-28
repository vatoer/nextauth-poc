"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      variant={"outline"}
    >
      Sign Out
    </Button>
  );
};

export default SignoutButton;
