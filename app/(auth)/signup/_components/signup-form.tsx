"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import InputForm from "../../_components/input-form";

const schema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export const SignupForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("data", data);
    // Handle form submission here
    try {
      const newUser = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!newUser.ok) {
        throw new Error("Something went wrong");
      }

      console.log("success", data);
      toast.success("Success");
      router.push("/signup/confirmation");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };

  const input_style =
    "form-control block w-full h-[4em] px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4 relative group">
          <InputForm
            id="name"
            label="Name"
            register={register}
            name="name"
            error={errors.name}
          />
        </div>
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

        <Button
          onClick={() => {
            handleSubmit(onSubmit);
          }}
          className="w-full py-6"
          disabled={isLoading}
        >
          Sign up
          {isLoading && (
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
        href="/signin"
        className={buttonVariants({
          variant: "link",
          className: "gap-1.5 w-full text-blue-500",
        })}
      >
        {`Already have an account? Signin`}
        <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </>
  );
};
