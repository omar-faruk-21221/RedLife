"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return <>{children}</>;
}
