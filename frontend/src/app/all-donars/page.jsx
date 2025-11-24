"use client";
import DonarCard from "@/components/DonarCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(donors, loading);
  useEffect(() => {
    fetch("/donar.json")
      .then((res) => res.json())
      .then((data) => {
        setDonors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <section className="mt-5">
        <h2 className="text-4xl font-bold text-center ">All Donars</h2>
        <span className="divider "></span>
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading donors...</p>
          ) : donors.length === 0 ? (
            <p className="text-center text-gray-500">No donors found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {donors.map((donar) => (
                <DonarCard key={donar.id} donar={donar} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
