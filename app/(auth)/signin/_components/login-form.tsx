"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <>
      <form onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          <input
            required
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email address"
            className={`${input_style}`}
          />
        </div>
        <div className="mb-6">
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            className={`${input_style}`}
          />
        </div>
        <Button className="w-full py-6" disabled={loading}>
          Sign In
          {loading && (
            <Loader className="ml-2 spin-in" size={24} color="white" />
          )}
        </Button>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>

        <Button
          onClick={() => signIn("google", { callbackUrl })}
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
      </form>
      <Link
        href="/signup"
        className={buttonVariants({
          variant: "link",
          className: "gap-1.5 w-full text-blue-500",
        })}
      >
        Don't have an account? Sign up
        <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </>
  );
};
