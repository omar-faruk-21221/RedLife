"use client";
import Bannar from "@/app/Bannar";
import HowWork from "@/app/HowWork";
import OurStatistics from "@/app/OurStatistics";
import Review from "@/app/Review";
import DonarCard from "@/components/DonarCard";
import { apiClient } from "@/utilitics/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [topDonors, setTopDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(topDonors, loading);
useEffect(() => {
  apiClient.get("/topDonors")
    .then(res => setTopDonors(res.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
}, []);


  return (
    <div>
      <header>
        <Bannar></Bannar>
      </header>
      <main className="max-w-7xl mx-auto space-y-5">
        {/* top donnar  */}
        <section className="my-15">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-4xl font-bold">Top Donars</h2>
            <Link className="btn btn-primary" href={"/all-donars"}>
              Show All
            </Link>
          </div>
          <span className="divider"></span>
          {loading ? (
            <p className="text-center text-gray-500">Loading donors...</p>
          ) : topDonors.length === 0 ? (
            <p className="text-center text-gray-500">No donors found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {topDonors.map((donar) => (
                <DonarCard key={donar._id} donar={donar} />
              ))}
            </div>
          )}
        </section>

        {/* our Communite */}
        <section></section>

        {/* -----------------------------------------  */}
        {/* our Review */}
        <section className=" bg-primary-content rounded-2xl px-15 pb-10">
          <h1 className="text-4xl py-7 text-center font-bold text-primary">
            Review
          </h1>
          <Review />
        </section>
        {/* ------------------------------ */}
        {/* statics  */}
        <section>
          <OurStatistics />
        </section>
        {/* how itsworks */}
        <section className="bg-secondary-content rounded-2xl px-15 pb-10">
          <h1 className=" w-fit bg-base-300 text-3xl  rounded-b-2xl  px-6 py-3 text-center font-bold text-primary mx-auto">
            How its Work
          </h1>
          <HowWork />
        </section>
      </main>
    </div>
  );
}
