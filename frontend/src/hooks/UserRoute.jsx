"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";

export default function UserRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); 
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return <>{children}</>;
}
