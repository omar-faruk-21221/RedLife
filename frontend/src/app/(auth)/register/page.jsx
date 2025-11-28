"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";
import GoogleLogIn from "@/components/GoogleLogIn";

export default function RegisterPage() {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  const handleRegister = async (data) => {
    try {
      const res = await registerUser(data.email, data.password);
      console.log("Firebase Response:", res);

      // Optional: update profile if name & photo needed
      if (res.user) {
        await res.user.updateProfile({
          displayName: data.name,
          photoURL: data.photo,
        });
      }
      toast.success("Registration Successful!");
      reset();
      router.push("/");
    } catch (err) {
      // console.error("Registration error:", err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <h1 className="text-2xl text-center font-bold text-accent mb-4">
            Register your account
          </h1>

          <div className="divider"></div>

          <fieldset className="space-y-3">
            {/* Name */}
            <div>
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Photo URL"
                {...register("photo", { required: "Photo URL is required" })}
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </fieldset>

          <div className="text-accent text-center mt-3">
            Have an account?{" "}
            <Link href="/login" className="text-green-500 font-medium">
              Log In
            </Link>
          </div>

          {/* Google Login */}
          <GoogleLogIn/>
        </form>
      </div>
    </div>
  );
}
