import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface ButtonWithGoogleProps {
  callbackUrl?: string;
}

const ButtonWithGoogle = ({ callbackUrl = "/" }: ButtonWithGoogleProps) => {
  const handleLoginWithGoogle = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <Button
      onClick={handleLoginWithGoogle}
      type="button"
      className="flex justify-center items-center gap-x-2 w-full"
      variant={"outline"}
    >
      <Image
        className="pr-2"
        src="/images/google.svg"
        alt=""
        width={24}
        height={24}
        style={{ height: "2rem" }}
      />
      <span className="text-slate-600">Continue with Google</span>
    </Button>
  );
};

export default ButtonWithGoogle;
