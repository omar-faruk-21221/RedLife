"use client";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function DonarCard({ donar }) {
//   console.log(donar);
  const {
    _id,
    name,
    district,
    image,
    lastDonatedDate,
    donatedTimes,
    priorityRating,
  } = donar || {};
  return (
    <div className=" mb-10 rounded-xl  shadow-md items-center hover:scale-107 bg-secondary-content hover:bg-secondary transition transform cursor-pointer ease-in-out">
      <figure className="">
        <FaUser className="w-full min-h-[180px] text-gray-400 mb-2" />
        {/* {image ? (
          <Image
            src={image}
            alt={name}
            width={96} // 24 * 4
            height={96}
            className="rounded-full object-cover mb-4 border-4 border-primary"
          />
        ) : (
          <FaUser className="w-24 h-24 text-gray-400 mb-4 border-4 border-primary rounded-full p-4" />
        )} */}
      </figure>
      <main className="p-6 ">
        <h2 className="card-title text-3xl text-primary text-center mb-3">
          {name}
          <div className="badge bg-warning text-md p-2">O+</div>
        </h2>

        <section className="flex justify-between items-center">
          <p className="mb-2">
            <span className="font-semibold">District:</span> {district}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Priority:</span> {priorityRating}
          </p>
        </section>
        <p className="mb-2">
          <span className="font-semibold">Last Donate:</span> {lastDonatedDate}
        </p>

        <Link
          href={"/all-donors"}
          className="mt-4 btn btn-primary text-white rounded-md font-semibold transition w-full"
        >
          View Details
        </Link>
      </main>
    </div>
  );
}
