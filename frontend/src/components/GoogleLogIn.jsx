"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function GoogleLogIn({ redirectPath = "/" }) {
  const { logInGoogle } = useAuth();
  const router = useRouter();

  const handleGoogleLogIn = async () => {
    try {
      const res = await logInGoogle();
      console.log("Google login success:", res.user);
      toast.success("Logged in with Google!");
      router.push(redirectPath); // login এর পর আগের route এ redirect
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogIn}
      className="btn btn-secondary w-full p-4 flex items-center justify-center gap-2 mt-3"
    >
      <FcGoogle className="text-2xl" /> Log In With Google
    </button>
  );
}
