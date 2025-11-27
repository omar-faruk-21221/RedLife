"use client";
import DonarCard from "@/components/DonarCard";
import { apiClient } from "@/utilitics/api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(donors, loading);
  useEffect(() => {
    apiClient.get("/donors").then((res) => {
      // console.log("top doners",res.data)
      setDonors(res.data);
      setLoading(false);
    });
  }, []);
  // ----seach fitter ----
  const filteredDonors = donors.filter(
    (donar) =>
      donar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donar.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="">
      <header className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center py-7">All Donars</h2>
        <div className=" flex  justify-between items-center">
          <h3 className="text-xl font-semibold">
            Total Donars : {donors.length}
          </h3>
          <aside>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                required
                placeholder="Search ny name or blood group"
              />
            </label>
          </aside>
        </div>
      </header>
      <span className="divider "></span>
      <main className="max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading donors...</p>
        ) : donors.length === 0 ? (
          <p className="text-center text-gray-500">No donors found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {filteredDonors.map((donar) => (
              <DonarCard key={donar._id} donar={donar} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
