"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function GoogleLogIn({ redirectPath = "/" }) {
  const { logInGoogle } = useAuth();
  const router = useRouter();

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then((res) => {
        toast.success("Logged in with Google!");
        router.push(redirectPath); // redirect back
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogIn}
      className="btn btn-secondary w-full p-4 flex items-center justify-center gap-2"
    >
      <FcGoogle className="text-2xl" /> Log In With Google
    </button>
  );
}
