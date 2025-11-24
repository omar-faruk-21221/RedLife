"use client";

import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import Link from "next/link";
// import Image from "next/image";

const DonorCard = ({ donor }) => {
  // partner example: { _id, name, subject, rating, profileimage }
console.log(donor)
  const { _id, name,district, image, lastDonatedDate, donatedTimes,priorityRating } = donor || {};

  return (
    <div className="w-64 mb-10 bg-base-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-105 hover:bg-accent transition-transform cursor-pointer">
      <figure>
        {image ? (
          <Image
            src={image}
            alt={name}
            width={96} // 24 * 4
            height={96}
            className="rounded-full object-cover mb-4 border-4 border-primary"
          />
        ) : (
          <FaUser className="w-24 h-24 text-gray-400 mb-4 border-4 border-primary rounded-full p-4" />
        )}
      </figure>

      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>

      <p className="mb-2">
        <span className="font-semibold">District:</span> {district}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Donated Times:</span> {donatedTimes}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Last Donate:</span> {lastDonatedDate}
      </p>


      <Link
        href={"/all-donors    "}
        className="mt-4 btn btn-primary text-white rounded-md font-semibold transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default DonorCard;
