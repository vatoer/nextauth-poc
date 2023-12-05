import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const ConfirmationPage = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="items-center space-y-4">
        <h1 className="text-xl">You almost there</h1>
        <p>
          please check your email to verify your account. If you don&apos;t see
          it, check your spam folder.
        </p>
        <Link
          href="/signin"
          className={buttonVariants({
            variant: "outline",
            className:
              "w-full hover:underline text-white bg-primary hover:bg-primary hover:text-white hover:opacity-75",
          })}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
