"use client";

import React from "react";
import Link from "next/link";

export default function Bannar() {
  // ------- Demo Data --------
  const data = {
    eyebrow: "Welcome to RedLife",
    headline: "Donate Blood, Save Lives",
    subtitle:
      "Your small contribution can give someone another chance at life. Join thousands of donors in our community.",
    ctaText: "See All Donor",
    ctaHref: "/add-donor",
    bgImage:
      "https://as1.ftcdn.net/jpg/02/68/84/02/1000_F_268840289_Pdto4wxi92Mrn0fp0yaV1e310kovsP17.jpg",
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage:`url(${data.bgImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 text-white">
        <p className="text-lg font-medium text-red-300 tracking-wide">
          {data.eyebrow}
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">
          {data.headline}
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          {data.subtitle}
        </p>

        <Link
          href={'/all-donars'}
          className="text-xl py-6 mt-18 btn btn-primary  transition-all"
        >
          {data.ctaText}
        </Link>
      </div>
    </section>
  );
}
