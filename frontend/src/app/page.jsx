"use client";
import Bannar from "@/app/Bannar";
import HowWork from "@/app/HowWork";
import OurStatistics from "@/app/OurStatistics";
import Review from "@/app/Review";
import ContactPage from "@/components/Contaact";
import DonarCard from "@/components/DonarCard";
import FAQSection from "@/components/FAQSection";
import { apiClient } from "@/utilitics/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [topDonors, setTopDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(topDonors, loading);
  useEffect(() => {
    apiClient
      .get(`/donors?limit=8`)
      .then((res) => setTopDonors(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <header>
        <Bannar></Bannar>
      </header>
      <main className="max-w-7xl mx-auto space-y-15 mt-15">
        {/* top donnar  */}
        <section>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-8">
              {topDonors.map((donar) => (
                <DonarCard key={donar._id} donar={donar} />
              ))}
            </div>
          )}
        </section>

        {/* -----------------------------------------  */}
        {/* our Review */}
        <section className="rounded-2xl">
          <h1 className="text-4xl font-bold pb-6">Review</h1>
          <Review />
        </section>
        {/* ------------------------------ */}
        {/* statistics  */}
        <section>
          <OurStatistics />
        </section>

        {/* how itsworks */}
        <section>
          <h1 className=" text-4xl font-bold pb-6">How its Work</h1>
          <HowWork />
        </section>

        {/* ---- FAQ section -----  */}
        <section>
          <FAQSection />
        </section>
        {/* ---contact ---  */}
        <section>
          <ContactPage />
        </section>
      </main>
    </div>
  );
}
