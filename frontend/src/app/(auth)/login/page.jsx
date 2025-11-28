"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "@/context/useAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // App Router এর জন্য
import GoogleLogIn from "@/components/GoogleLogIn";

export default function Page({ handleGoogleLogIn }) {
  const { loginUser } = useAuth();
  const router = useRouter(); // router enable

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogIn = (data) => {
    console.log("login", data);
    loginUser(data.email, data.password)
      .then((userContainer) => {
        toast.success("Log in successful!!");
        console.log(userContainer.user);

        // ✅ Login successful হলে home page এ redirect
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message); // alert এর পরিবর্তে toast
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold uppercase mb-4">
            Log In
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit(handleLogIn)}>
            <fieldset className="fieldset space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-right">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </fieldset>
          </form>

          {/* Register Link */}
          <div className="text-accent text-center my-3">
            Don't have an account?{" "}
            <Link href="/register" className="text-red-500 font-medium">
              Register
            </Link>
          </div>
          {/* Google Login */}
          <GoogleLogIn />
        </div>
      </div>
    </div>
  );
}
