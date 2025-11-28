"use client";
import { useState, useEffect } from "react";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const Links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/all-donars">All Donars</Link>
      </li>
      <li>
        <Link href="/add-donar">Add Donar</Link>
      </li>
      <li>
        <Link href="/manage-donar">Manage Donar</Link>
      </li>
    </>
  );

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.warning("Log Out Successfully!");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Logout Failed");
    }
  };

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="navbar backdrop-blur-lg shadow-sm px-4 lg:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold text-secondary-focus">
          RedLife
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-secondary text-base-100"
          >
            Log Out
          </button>
        ) : (
          <Link href="/login" className="btn btn-primary">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
