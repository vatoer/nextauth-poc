"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { type } from "os";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonWithGoogle from "../../_components/button-with-google";
import InputForm from "../../_components/input-form";

const formCchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof formCchema>;

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

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>({
    resolver: zodResolver(formCchema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle sign in here with email and password using nextauth
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        throw new Error("invalid email or password");
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-4 relative group">
          <InputForm
            type="email"
            id="email"
            label="Email"
            register={register}
            name="email"
            error={errors.email}
          />
        </div>
        <div className="mb-4 relative group">
          <InputForm
            type="password"
            id="password"
            label="Password"
            register={register}
            name="password"
            error={errors.password}
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

        <ButtonWithGoogle />
      </form>
      <Link
        href="/signup"
        className={buttonVariants({
          variant: "link",
          className: "gap-1.5 w-full text-blue-500",
        })}
      >
        {`Don't have an account? Sign up`}
        <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </>
  );
};
