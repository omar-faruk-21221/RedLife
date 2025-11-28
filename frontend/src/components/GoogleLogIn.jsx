"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation"; // <-- use this for App Router
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function GoogleLogIn() {
  const { logInGoogle } = useAuth();
  const router = useRouter();

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then((res) => {
        console.log("Google login success:", res.user);
        toast.success("Logged in with Google!");
        router.push("/");
      })
      .then((err) => {
        console.log("google log in error", err);
        toast.error(err);
      });
  };

  return (
    <div>
      <div
        type="button"
        onClick={handleGoogleLogIn}
        className="btn btn-secondary w-full p-4 flex items-center justify-center gap-2"
      >
        <FcGoogle className="text-2xl" /> Log In With Google
      </div>
    </div>
  );
}
