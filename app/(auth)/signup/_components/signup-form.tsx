"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
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
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <Button className="w-full py-6" disabled={isLoading}>
        Sign up
        {isLoading && (
          <Loader className="ml-2 spin-in" size={24} color="white" />
        )}
      </Button>
    </form>
  );
};
